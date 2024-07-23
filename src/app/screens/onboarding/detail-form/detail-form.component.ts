import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {
  username: string = '';
  submittedData: any = null;

  restroDetails = this.formBuilder.group({
    name: new FormControl<string>('', Validators.required),
    owner: [''],
    address: this.formBuilder.group({
      city: new FormControl<string>(''),
      zipcode: [''],
      street: new FormControl<string>('')
    })
  });

  constructor(private formBuilder: FormBuilder) {
    this.username = 'Viper';
    display('Pratyy');
  }

  displayName(): string {
    return 'Prathamesh';
  }

  displayRestroDetails() {
    if (this.restroDetails.valid) {
      this.submittedData = this.restroDetails.value;
      console.log(this.submittedData);
    } else {
      console.error('Form is invalid');
    }
  }
}

function display(name: string): string {
  console.log(name);
  return name;
}
