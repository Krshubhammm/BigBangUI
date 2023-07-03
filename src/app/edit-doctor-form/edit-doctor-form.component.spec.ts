import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDoctorFormComponent } from './edit-doctor-form.component';

describe('EditDoctorFormComponent', () => {
  let component: EditDoctorFormComponent;
  let fixture: ComponentFixture<EditDoctorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDoctorFormComponent]
    });
    fixture = TestBed.createComponent(EditDoctorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
