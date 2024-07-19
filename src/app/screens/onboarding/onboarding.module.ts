import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { DetailFormComponent } from './detail-form/detail-form.component';


@NgModule({
  declarations: [
    DetailFormComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
