import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-static-checkbox-validation',
  standalone: true,
  imports: [],
  templateUrl: './static-checkbox-validation.component.html',
  styleUrl: './static-checkbox-validation.component.scss'
})
export class StaticCheckboxValidationComponent {

  checkboxForm: FormGroup;

  constructor() {
    this.checkboxForm = new FormGroup({
      
    });
  }
}


