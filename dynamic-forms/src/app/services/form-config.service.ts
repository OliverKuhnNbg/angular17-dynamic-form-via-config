import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  constructor(private httpClient: HttpClient) {

  }

  private readonly _dynamicFormConfig$ = this.httpClient
    .get("assets/form-configs/user-registration-form-config.json", {
      responseType: 'json'
    })
    .pipe(
      shareReplay({
        bufferSize: 1,
        refCount: true
      })
    );

  getJsonFormConfig(url:string) {
    return this._dynamicFormConfig$;
  }
}
