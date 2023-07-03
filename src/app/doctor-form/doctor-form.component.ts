import { Component } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent {
  constructor(private http: HttpClient){}
 // id number
  doctor = {
    firstName: '',
    lastName: '',
    phone: '',
    clinic_Location: '',
    fees: '',
    isActive: false
  };

  submitForm() {
    // console.log('Form submitted');
    // console.log('First Name:', this.doctor.firstName);
    // console.log('Last Name:', this.doctor.lastName);
    // console.log('Phone:', this.doctor.phone);
    // console.log('Clinic Location:', this.doctor.clinic_Location);
    // console.log('Fees:', this.doctor.fees);
    // console.log('Active:', this.doctor.isActive);
    // You can perform further actions with the input values here
    console.log(this.doctor);
    this.http.post<any> ('https://localhost:7067/api/Doctor',this.doctor).subscribe((data)=>{
      console.log(data)
      alert ("Added Success");
    })
  }
}