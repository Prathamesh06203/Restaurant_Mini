import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListRestoComponent } from '../list-resto/list-resto/list-resto.component';
import { ModalComponent } from '../onboarding/modal/modal.component';

@NgModule({
  declarations: [
    DetailFormComponent,
    ListRestoComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
  ]
})
export class OnboardingModule { }
