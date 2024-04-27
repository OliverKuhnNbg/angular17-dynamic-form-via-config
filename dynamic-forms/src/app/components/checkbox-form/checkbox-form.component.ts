import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  url: string= 'assets/form-configs/responsibility.config.json'
  //serviceFormCategorys: FormGroup;
  serviceFormData: any

  constructor(private fb: FormBuilder, private formConfigService: FormConfigService) {
    console.log('--------------------\n\n\tconstructor\n-----------------------\n\n')
    // this.serviceFormCategorys = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]]
    // });
    
  }
  
  ngOnInit(): void {
    console.log('--------------------\n\n\tngOnInit\n-----------------------\n\n');
    this.formConfigService.getResponsibilityFormConfig().subscribe((data:any) => {
      this.serviceFormData = data;
      if(data!=undefined) this.createForm();
    })
  }

  private createForm() {
    console.log('--------------------\n\n\tcreateForm(serviceFormData: any)\n-----------------------\n\n');
    console.log('DATA1:\n------------------',this.serviceFormData);
    let serviceNames = this.getServiceNames();
    console.log('DATA3:\n------------------',serviceNames);
  }
  private getServiceNames() {
    console.log('--------------------\n\n\tgetServiceNames(dataObject: any)\n-----------------------\n\n');
    console.log('DATA2:\n------------------',this.serviceFormData);
    let names:string[] = []
    Object.entries(this.serviceFormData!).map(([key]) => {
      console.log(key)
      names.push(key);
    });
    return names;
  }
  
}

