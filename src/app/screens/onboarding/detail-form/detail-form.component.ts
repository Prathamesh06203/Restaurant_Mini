// import { Component } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { BackendService } from 'src/app/services/backend.service';

// interface RestaurantRequest {
//   name: string;
//   owner: string;
//   city: string;
//   zipCode: number;  
//   streetName: string;
//   type: string;
//   contact: number;
// }

// @Component({
//   selector: 'app-detail-form',
//   templateUrl: './detail-form.component.html',
//   styleUrls: ['./detail-form.component.scss']
// })
// export class DetailFormComponent {
//   username: string = '';
//   ownerName: string = '';
//   message: string = '';
//   submittedData: any = null;
//   restaurantRequest: RestaurantRequest = {
//     name: '',
//     owner: '',
//     city: '',
//     type: '',
//     contact: 0,
//     zipCode: 0,  
//     streetName: ''
//   };

//   restroDetails = this.formBuilder.group({
//     name: new FormControl<string>('', Validators.required),
//     owner: new FormControl<string>(''),  
//     type: new FormControl<string>(''),  
//     contact: new FormControl<number>(0),  
//     address: this.formBuilder.group({
//       city: new FormControl<string>(''),
//       zipCode: new FormControl<number>(0),  
//       streetName: new FormControl<string>('')
//     })
//   });

//   constructor(private formBuilder: FormBuilder, private backendService: BackendService) {
//     this.username = 'Viper';
//     this.display('Pratyy');
//   }

//   display(name: string): string {
//     console.log(name);
//     return name;
//   }

//   displayName(): string {
//     return 'Prathamesh';
//   }

//   displayRestroDetails() {
//     if (this.restroDetails.valid) {
//       this.submittedData = this.restroDetails.value;
//       console.log(this.submittedData);
//       this.createRequest(this.restroDetails);
//     } else {
//       console.error('Form is invalid');
//     }
//   }

//   createRequest(details: FormGroup) {
//     this.restaurantRequest.name = details.value['name'];
//     this.restaurantRequest.owner = details.value['owner'];
//     this.restaurantRequest.type = details.value['type'];
//     this.restaurantRequest.contact = details.value['contact'];
//     this.restaurantRequest.city = details.value['address']['city'];
//     this.restaurantRequest.zipCode = details.value['address']['zipCode'];
//     this.restaurantRequest.streetName = details.value['address']['streetName'];
//     this.ownerName = this.restaurantRequest.owner;
//     this.processRequest(this.restaurantRequest);
//   }

//   processRequest(restaurantRequest: RestaurantRequest) {
//     this.backendService.onboardingRestaurant(restaurantRequest); 
//   }

//   getEvent($event : Event){
//     // this.message = $event;
//     console.log($event);
//   }
// }
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

interface RestaurantRequest {
  name: string;
  owner: string;
  city: string;
  zipCode: number;
  streetName: string;
  type: string;
  contact: number;
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
  formSubmitted = false;
  restaurantRequest: RestaurantRequest = {
    name: '',
    owner: '',
    city: '',
    type: '',
    contact: 0,
    zipCode: 0,
    streetName: ''
  };

  restroDetails = this.formBuilder.group({
    name: new FormControl<string>('', Validators.required),
    owner: new FormControl<string>(''),
    type: new FormControl<string>(''),
    contact: new FormControl<number>(0),
    address: this.formBuilder.group({
      city: new FormControl<string>(''),
      zipCode: new FormControl<number>(0),
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
    } else {
      console.error('Form is invalid');
    }
    this.formSubmitted = true;
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
    this.backendService.onboardingRestaurant(restaurantRequest);
  }

  onFormSubmit() {
    this.message = 'Form has been submitted!';
  }

  getEvent($event: string) {
    this.message = $event;
  }
}
