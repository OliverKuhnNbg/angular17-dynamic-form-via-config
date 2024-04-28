import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.scss'
})
export class ReactiveFormValidationComponent {
  userForm: FormGroup;

  constructor(){
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      userName: new FormControl(',', [Validators.required, Validators.email]),
      city: new FormControl(''),
      zip: new FormControl(''),
      isAgree: new FormControl(false),
    })
  }
}
