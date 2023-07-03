import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://localhost:7067/api/User/';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(this.baseUrl);
  }
  getAllDoctors() {
    return this.http.get<any>('https://localhost:7067/api/Doctor');
  }
  addDoctor(doctor: Doctor) {
    return this.http.post<Doctor>(`https://localhost:7067/api/Doctor`, doctor);
  }

  updateDoctor(doctor: Doctor) {
    return this.http.put<Doctor>(`https://localhost:7067/api/Doctor/${doctor.Id}`, doctor);
  }

  deleteDoctor(doctorId: number) {
    return this.http.delete(`${this.baseUrl}/Doctor/${doctorId}`);
  }
}
