import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegustrationComponent } from './components/regustration/regustration.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    RegustrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginpageComponent,
    RegustrationComponent
  ]
})
export class AuthModule { }
