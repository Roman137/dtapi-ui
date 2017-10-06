import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminGuard} from './guards/admin-guard';
import {FacultiesComponent} from './faculties/faculties.component';
import {StudentsComponent} from './students/students.component';
import {AdminComponent} from './admin.component';

const adminRoutes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AdminGuard],
    children: [
      {
        path: 'students', component: StudentsComponent
      },
      {
        path: 'faculties', component: FacultiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminRoutingModule {
}
