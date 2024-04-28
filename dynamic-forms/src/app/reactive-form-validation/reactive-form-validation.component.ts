import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
      firsName: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    })
  }
}
