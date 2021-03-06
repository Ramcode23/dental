import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './maintenance/doctors/doctors.component';
import { DoctorComponent } from './maintenance/doctors/doctor.component';

import { ServicesComponent } from './maintenance/services/services.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AdminComponent } from './maintenance/admin/admin.component';
import { ServiceComponent } from './maintenance/services/service.component';
import { DiagnosticComponent } from './maintenance/diagnostic/diagnostic.component';
import { DiagnosticsComponent } from './maintenance/diagnostics/diagnostics.component';
import { DiagnosticGuard } from '../guards/diagnostic.guard';
import { PatientsComponent } from './maintenance/patients/patients.component';
import { PatientComponent } from './maintenance/patients/patient.component';

const childRoutes: Routes = [

  { path: '', component: AdminComponent },
  { path: 'diagnostic/:id', component: DiagnosticComponent, canDeactivate: [DiagnosticGuard] },
  { path: 'diagnostic', component: DiagnosticComponent, canDeactivate: [DiagnosticGuard] },
  { path: 'diagnostics', component: DiagnosticsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'doctor/:id', component: DoctorComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patient/:id', component: PatientComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'schedule', component: ScheduleComponent },

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildrouterModule { }
