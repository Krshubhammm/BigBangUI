import { AuthService } from './../../services/auth.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
import { HttpClient } from '@angular/common/http';
//import { UserStoreService } from 'src/app/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public users: any = [];
  public doctors: any = [];
  public role: string | null = '';

  public fullName: string = '';
  apiService: any;
  public loggedInAsAdmin: boolean = false;
  public userFullName: string = '';
  public activated: any[] = []; 
  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  //private userStore: UserStoreService
  ngOnInit() {
    this.api.getAllDoctors().subscribe((res) => {
      this.doctors = res;
      
    });

    //   this.userStore.getFullNameFromStore()
    //   .subscribe(val=>{
    //     const fullNameFromToken = this.auth.getfullNameFromToken();
    //     this.fullName = val || fullNameFromToken
    //   });

    //   this.userStore.getRoleFromStore()
    //   .subscribe(val=>{
    //     const roleFromToken = this.auth.getRoleFromToken();
    //     this.role = val || roleFromToken;
    //   })
    this.role = localStorage.getItem('role');
     
  if (this.role === 'admin') {
    this.loggedInAsAdmin = true;
    this.userFullName = this.auth.getfullNameFromToken();
  }

  this.http.get <any> ("https://localhost:7067/api/Doctor/activated").subscribe((data)=>{
    this.activated = data
  })
  }
  toggleActivation(id: number, doctor: Doctor) {
    doctor.IsActive = !doctor.IsActive;
    // Perform activation/deactivation logic by sending an API request
    this.http
      .put(
        `https://localhost:7067/api/Doctor/api/doctor/change-status/${id}`,
        id
      )
      .subscribe((response) => {
        // Handle the response if needed
      });
  }
  addDoctor() {
    const newDoctor: Doctor = {
      FirstName: 'John',
      LastName: 'Doe',
      Phone: '1234567890',
      Clinic_Location: 'Sample Location',
      Fees: '100',
      IsActive: true,
      Id: 0
      
    };
    
   
    this.apiService.addDoctor(newDoctor).subscribe(
      (doctor: Doctor) => {
        this.doctors.push(doctor);
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }
 
  // updateDoctor(doctorId: number) {
  //   // Implement your logic to navigate to the doctor's edit page or perform an edit operation
  //  this.http.put(`https://localhost:7067/api/Doctor/ ${doctorId}`)
  //   console.log('Edit doctor:', doctorId);
  // }

  deleteDoctor(doctorId: number) {
    // Perform the delete operation by sending an API request
    this.http
      .delete(`https://localhost:7067/api/Doctor/ ${doctorId}`)
      .subscribe(() => {
        this.doctors = this.doctors.filter(
          (doctor: { id: number }) => doctor.id !== doctorId
        );
      });
  }

  logout() {
    this.auth.signOut();
  }
}
