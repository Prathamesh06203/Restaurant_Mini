import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantRequest } from 'src/app/models/RestaurantRequest';
import { BackendService } from 'src/app/services/backend.service';
import { AddressDetails } from 'src/app/models/address';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {
  restaurantRequest: RestaurantRequest = new RestaurantRequest();
  showModal: boolean = false;

  restroDetails = this.formBuilder.group({
    name: ['', Validators.required],
    owner: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zipCode: [0]
    }),
    type: [''],
    contact: this.formBuilder.group({
      phone: [0, Validators.required],
      email: ['']
    })
  });

  constructor(private formBuilder: FormBuilder, private backendService: BackendService, private router : Router) { }

  openConfirmModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitDetails() {
    console.log('Form submitted:', this.restroDetails.value);
    Swal.fire({
      icon: 'success',
      title: 'Submitted!',
      text: 'Your restaurant details have been successfully submitted.',
      
    });
    this.router.navigate(['/home']);
  }


  createRequest(details: FormGroup) {
    const addressDetails: AddressDetails = {
      streetName: details.value['address']['street'],
      city: details.value['address']['city'],
      pinCode: details.value['address']['zipCode']
    };
  

    this.restaurantRequest = {
      name: details.value['name'],
      owner: details.value['owner'],
      type: details.value['type'],
      street: details.value['address']['street'],
      city: details.value['address']['city'],
      zipCode: details.value['address']['zipCode'],
      addressDetails: addressDetails,
      phone: details.value['contact']['phone'],
      email: details.value['contact']['email']
    };
  
    this.processRequest(this.restaurantRequest);
  }

  processRequest(restaurantRequest: RestaurantRequest) {
    this.backendService.onboardRestaurant(restaurantRequest).subscribe({
      next: () => {
        alert('Details submitted successfully!');
      },
      error: () => {
        alert('Failed to submit details. Please try again.');
      }
    });
  }

}
