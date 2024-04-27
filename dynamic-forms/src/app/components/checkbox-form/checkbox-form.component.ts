import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox-form',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-form.component.html',
  styleUrl: './checkbox-form.component.scss'
})
export class CheckboxFormComponent {
  serviceFormCategorys: FormGroup;

  constructor(private fb: FormBuilder) {
    this.serviceFormCategorys = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
