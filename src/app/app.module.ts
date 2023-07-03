import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgToastModule } from 'ng-angular-popup';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatCardModule } from '@angular/material/card';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { EditDoctorFormComponent } from './edit-doctor-form/edit-doctor-form.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    PatientListComponent,
    HomeComponent,
    AppointmentComponent,
    DoctorFormComponent,
    EditDoctorFormComponent,
    DoctorRegistrationComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    MatCardModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
