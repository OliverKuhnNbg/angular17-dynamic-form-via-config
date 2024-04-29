import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCheckboxValidationComponent } from './static-checkbox-validation.component';

describe('StaticCheckboxValidationComponent', () => {
  let component: StaticCheckboxValidationComponent;
  let fixture: ComponentFixture<StaticCheckboxValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticCheckboxValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticCheckboxValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
