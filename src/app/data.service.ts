import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://localhost:7067/api/Doctor'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    // Add authorization headers for admin role
    const headers = this.getHeadersWithAuthorization();

    return this.http.get<Doctor[]>(`${this.baseUrl}`, { headers });
  }

  toggleActivation(doctor: Doctor): Observable<any> {
    // Add authorization headers for admin role
    const headers = this.getHeadersWithAuthorization();

    // Send a PATCH request to update the doctor's activation status
    return this.http.patch(`${this.baseUrl}/${doctor.Id}`, { isActive: !doctor.IsActive }, { headers });
  }

  private getHeadersWithAuthorization(): HttpHeaders {
    // Implement your authorization logic here
    // Get the authentication token from the storage (e.g., localStorage or a service)
    const authToken = 'your-auth-token';

    // Add authorization headers
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${authToken}`);

    return headers;
  }
}
