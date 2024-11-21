import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';

interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-registration',  
  templateUrl: './regustration.component.html',  
  styleUrls: ['./regustration.component.scss']
})
export class RegustrationComponent {  // 
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private backendService: BackendService) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userRegistration: UserRegistration = this.userForm.value;
      console.log('Registration Successful:', userRegistration);
      this.sendRegistrationData(userRegistration);
    } else {
      console.error('Form is invalid');
    }
  }

  sendRegistrationData(userRegistration: UserRegistration) {
    this.backendService.registerUser(userRegistration)
      .subscribe(
        response => {
          console.log('Registration successful:', response);
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
  }
}
