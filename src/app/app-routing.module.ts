import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { EditDoctorFormComponent } from './edit-doctor-form/edit-doctor-form.component';
import { DoctorRegistrationComponent } from './components/doctor-registration/doctor-registration.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'appointment', component: AppointmentComponent},
  { path: 'doctor_form', component: DoctorFormComponent},
  { path: 'editdoc', component: EditDoctorFormComponent},
  { path: 'docreg', component: DoctorRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
