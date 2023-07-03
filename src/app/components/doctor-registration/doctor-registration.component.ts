import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent {
  public role: string | null = '';
  constructor(private http: HttpClient){}

  doctor: Doctor = {
    FirstName: '',
      LastName: '',
      Phone: '',
      Clinic_Location: '',
      Fees: '',
      IsActive: true,
      Id: 0
  };
  submitForm() {
    // Process the form submission here
    console.log(this.doctor);
    this.http.post<any> ('https://localhost:7067/api/Doctor',this.doctor).subscribe((data)=>{
      console.log(data)
      alert ("Added Success");
    })
    
  }
}
