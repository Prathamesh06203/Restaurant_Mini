import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private backendService: BackendService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.backendService.login(loginData)
        .subscribe(
          response => {
            console.log('Login successful:', response);
            localStorage.setItem('userToken', response.token);  // Store the token if needed
            this.router.navigate(['/onboarding/form']);
          },
          error => {
            console.error('Login failed:', error);
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }
}
