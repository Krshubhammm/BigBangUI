// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { Doctor } from './models/doctor.model';

// @Component({
//   selector: 'app-patient-dashboard',
//   templateUrl: './patient-dashboard.component.html',
//   styleUrls: ['./patient-dashboard.component.css']
// })
// export class PatientDashboardComponent implements OnInit {
//   doctors: Doctor[] = [];

//   constructor(private dataService: DataService) { }

//   ngOnInit() {
//     this.fetchActivatedDoctors();
//   }

//   fetchActivatedDoctors() {
//     this.dataService.getDoctors().subscribe((doctors: Doctor[]) => {
//       this.doctors = doctors.filter((doctor: Doctor) => doctor.isActivated);
//     });
//   }
// }
