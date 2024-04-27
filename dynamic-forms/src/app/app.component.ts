import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { CheckboxFormComponent } from './components/checkbox-form/checkbox-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, DynamicFormComponent, CheckboxFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-forms-app';

  userForm: FormGroup;

  constructor () {
    this.userForm = new FormGroup({
      firstName: new FormControl("", [Validators.required,Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log("form submitted");
    console.log(this.userForm.value)
  }
}
