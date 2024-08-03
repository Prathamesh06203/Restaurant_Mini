import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

interface RestaurantRequest {
  name: string;
  owner: string;
  city: string;
  zipCode: string;
  streetName: string;
  type: string;
  contact: string;
}

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {
  username: string = '';
  ownerName: string = '';
  message: string = '';
  submittedData: any = null;
  restaurantRequest: RestaurantRequest = {
    name: '',
    owner: '',
    city: '',
    type: '',
    contact: '',
    zipCode: '',
    streetName: ''
  };

  onFormSubmit: boolean = false;

  restroDetails = this.formBuilder.group({
    name: new FormControl<string>('', Validators.required),
    owner: new FormControl<string>(''),
    type: new FormControl<string>(''),
    contact: new FormControl<string>(''),
    address: this.formBuilder.group({
      city: new FormControl<string>(''),
      zipCode: new FormControl<string>(''),
      streetName: new FormControl<string>('')
    })
  });

  constructor(private formBuilder: FormBuilder, private backendService: BackendService) {
    this.username = 'Viper';
    this.display('Pratyy');
  }

  display(name: string): string {
    console.log(name);
    return name;
  }

  displayName(): string {
    return 'Prathamesh';
  }

  displayRestroDetails() {
    if (this.restroDetails.valid) {
      this.submittedData = this.restroDetails.value;
      console.log(this.submittedData);
      this.createRequest(this.restroDetails);
      this.onFormSubmit = true;
    } else {
      console.error('Form is invalid');
    }
  }

  createRequest(details: FormGroup) {
    this.restaurantRequest.name = details.value['name'];
    this.restaurantRequest.owner = details.value['owner'];
    this.restaurantRequest.type = details.value['type'];
    this.restaurantRequest.contact = details.value['contact'];
    this.restaurantRequest.city = details.value['address']['city'];
    this.restaurantRequest.zipCode = details.value['address']['zipCode'];
    this.restaurantRequest.streetName = details.value['address']['streetName'];
    this.ownerName = this.restaurantRequest.owner;
    this.processRequest(this.restaurantRequest);
  }

  processRequest(restaurantRequest: RestaurantRequest) {
    this.backendService.onboardingRestaurant(restaurantRequest).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    });
    
  }

  getEvent($event: string) {
    this.message = $event;
    console.log($event);
  }
}
