import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-doctor-form',
  templateUrl: './edit-doctor-form.component.html',
  styleUrls: ['./edit-doctor-form.component.css']
})
export class EditDoctorFormComponent {
  constructor(private http: HttpClient){}
   id: number=0;
   doctor = {

     firstName: '',
     lastName: '',
     phone: '',
     clinic_Location: '',
     fees: '',
     isActive: false
   };
 
   submitForm() {
     
     console.log(this.doctor);
     this.http.put<any> (`https://localhost:7067/api/Doctor/${this.id}`,this.doctor).subscribe((data)=>{
       console.log(data)
     })
   }
 }