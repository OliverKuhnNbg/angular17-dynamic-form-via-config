import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-static-checkbox-validation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './static-checkbox-validation.component.html',
  styleUrl: './static-checkbox-validation.component.scss'
})
export class StaticCheckboxValidationComponent {

  checkboxForm: FormGroup;
  isDisabled: boolean = true;

  constructor() {
    this.checkboxForm = new FormGroup({
      service: new FormControl(null),
      serviceCategory: new FormGroup(
        {
          electricity: new FormControl(false, { nonNullable: true }),
          gas: new FormControl(false, { nonNullable: true }),
          water: new FormControl(false, { nonNullable: true }),
          broadband: new FormControl(false, { nonNullable: true })
        }, this.requireAtLeastOneCheckbox(['electricity', 'gas', 'water', 'broadband'])
      ),
      serviceType: new FormGroup(
        {
          newConnection: new FormControl(false, { nonNullable: true }),
          connectionChange: new FormControl(false, { nonNullable: true }),
        }, this.requireAtLeastOneCheckbox(['newConnection', 'connectionChange'])
      )
    });
  }

  ngOnInit() {
    // this.checkboxForm.controls['serviceType'].get('connectionChange')?.disable();
    // this.checkboxForm.controls['serviceType'].get('newConnection')?.disable();
  }
  
  /* Custom validators */
  private requireAtLeastOneCheckbox(
    formControlNames: string[]
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Workaround: Parameter can not be of type "FormGroup" as it does not match "ValidatorFn" signature
      const formGroup = control as FormGroup;
      const setFormControlErrors = (errors: ValidationErrors | null) => {
        formControlNames.forEach((fcn) => formGroup.get(fcn)?.setErrors(errors));
      };

      setFormControlErrors(null);

      const atLeastOneControlChecked = formControlNames.some(
        (formControlName) => {
          return formGroup.get(formControlName)?.value;
        }
      );

      if (!atLeastOneControlChecked) {
        setFormControlErrors({ required: true });
      }

      return null;
    };
  }
}


