import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormConfigService } from '../../services/form-config.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-checkbox-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [FormConfigService],
  templateUrl: './checkbox-form.component.html',
  styleUrl: './checkbox-form.component.scss'
})
export class CheckboxFormComponent {
  url: string= 'assets/form-configs/responsibility.config.json';
  serviceFormCategorys: FormGroup = new FormGroup({});
  serviceFormData: any;
  serviceNames: string[] = [''];
  serviceTypesNames: string[] = [''];

  inputType: string = 'checkbox';

  constructor(private fb: FormBuilder, private formConfigService: FormConfigService) {
    console.log('--------------------\n\n\tconstructor\n-----------------------\n\n');
  }
  
  ngOnInit(): void {
    console.log('--------------------\n\n\tngOnInit\n-----------------------\n\n');
    this.formConfigService.getResponsibilityFormConfig().subscribe((data:any) => {
      this.serviceFormData = data;
      if(data!=undefined) this.createForm();
    });
  }

  private createForm() {
    console.log('--------------------\n\n\tcreateForm(serviceFormData: any)\n-----------------------\n\n');
    console.log('DATA1:\n------------------',this.serviceFormData);
    this.serviceNames = this.getServiceNames(this.serviceFormData);
    this.serviceTypesNames = this.getServiceNames(this.serviceFormData.water.connection);
    console.log('DATA3:\n------------------',this.serviceNames);
    console.log('DATA4:\n------------------',this.serviceTypesNames);

    const mainFormGroup = this.fb.group({});
    const serviceCategoryFormGroup = this.fb.group({});
    const serviceTypeFormGroup = this.fb.group({});
    console.log('\n\nDATA5:\n------------------',serviceCategoryFormGroup);
    this.serviceNames.map((name) => {
      serviceCategoryFormGroup.addControl(name, new FormControl(false));
    });

    this.serviceFormCategorys = serviceCategoryFormGroup;
    console.log('\n\nDATA6:\n------------------', serviceCategoryFormGroup);
  }
  private getServiceNames(serviceFormData: any) {
    let names:string[] = []
    Object.entries(serviceFormData!).map(([key]) => {
      names.push(key);
    });
    return names;
  }

  onSubmit() {
    console.log('\n\nDATA7:\n------------------', this.serviceFormCategorys.controls);
    throw new Error('Method not implemented.');
  }
  
}

