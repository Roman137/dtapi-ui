import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminMaterialModule} from '../custom-material-modules/admin-material.module';
import {AdminRoutingModule} from './admin-routing.module';
import {LoginService} from '../login/services/login.service';
import {StudentsComponent} from './students/students.component';
import {FacultiesComponent} from './faculties/faculties.component';

@NgModule({
  imports: [
    CommonModule,
    AdminMaterialModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, StudentsComponent, FacultiesComponent]
})
export class AdminModule { }
