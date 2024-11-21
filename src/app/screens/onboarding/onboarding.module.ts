import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';



@NgModule({
  declarations: [
    DetailFormComponent,
    ChildComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
  ]
})
export class OnboardingModule { }
