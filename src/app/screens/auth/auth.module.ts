import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegustrationComponent } from './components/regustration/regustration.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginpageComponent,
    RegustrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginpageComponent,
    RegustrationComponent
  ]
})
export class AuthModule { }
