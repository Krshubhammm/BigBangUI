import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  //patients: any[];
  //isAdmin: boolean;
  loggedInPatient: any;
  isAdmin: any;
  patients: any[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Check if the user is an admin or a logged-in patient
    this.checkUserRoles();

    // Fetch the patient data based on user role
    if (this.isAdmin) {
      this.fetchAllPatientData();
    } else {
      this.fetchPatientDataForLoggedInPatient();
    }
  }

  checkUserRoles(): void {
    // Implement your logic to determine if the user is an admin or a logged-in patient
    // Set the isAdmin and loggedInPatient properties accordingly
  }

  fetchAllPatientData(): void {
    // Fetch all patient data from the API or a data service accessible only by admin
    this.http.get<any[]>('/api/patients')
      .subscribe(data => {
        this.patients = data;
      });
  }

  fetchPatientDataForLoggedInPatient(): void {
    // Fetch patient data for the logged-in patient from the API or a data service
    // based on the activated doctor details issued by the admin
    const loggedInPatientId = this.loggedInPatient.id;

    this.http.get<any>(`/api/patients/${loggedInPatientId}`)
      .subscribe(data => {
        this.patients = [data]; // Convert the single patient data into an array
      });
  }
}
