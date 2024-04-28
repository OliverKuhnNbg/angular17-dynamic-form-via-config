import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormConfigService } from '../../services/form-config.service';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [FormConfigService],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  url: string= 'assets/form-configs/user-registration-form-config.json';
  formGroup: FormGroup = new FormGroup({});
  formFields: any[] = [];

  constructor(private formConfigService: FormConfigService) { 
    
  }

  ngOnInit(): void {
    this.formConfigService.getJsonFormConfig(this.url).subscribe((data:any) => {
      this.formFields = data;
      if(data.length>0) this.createFormGroup();
    })
    
  }

  private createFormGroup() {
    // console.log("\n\ncreate Form group called!");
    // console.log(this.formFields?.length );

    if (this.formFields) {
      // console.log("enter func");
      this.formFields.map((field) => {
        // console.log("\n-------------------------");
        // console.log(field.type);
        // console.log(field.name);
        // console.log(field.label);
        this.formGroup.addControl(field.name, new FormControl(''));
      })
    }

    // if (this.formFields) {
    //   console.log("never seen")
    //   this.formFields.forEach(field => {
    //     const validators = [];
    //     if (field.validation?.required) {
    //       validators.push(Validators.required);
    //     }
    //     if (field.validation?.email) {
    //       validators.push(Validators.email);
    //     }
    //     console.log("oliver test " + field.name)
    //     this.formGroup.addControl(field.name, new FormControl(''));
    //   });
    // } 
  }

  onSubmit() {
    // console.log(this.formGroup.controls);
    // console.log(Object.keys(this.formGroup.controls).length)
    throw new Error('Method not implemented.');
  }
}
