import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PatientDashboardModule } from '../patient-dashboard/patient-dashboard.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdMenuModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdMenuModule,
    MdButtonModule,
    PatientDashboardModule
  ],
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
