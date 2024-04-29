import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-checkbox-validation',
  standalone: true,
  imports: [],
  templateUrl: './static-checkbox-validation.component.html',
  styleUrl: './static-checkbox-validation.component.scss'
})
export class StaticCheckboxValidationComponent {
  private checkboxForm = new FormGroup({});

}
