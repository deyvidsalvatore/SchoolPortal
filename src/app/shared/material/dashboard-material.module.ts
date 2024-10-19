import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const dashboardMaterialModules = [
  MatIconModule,
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [dashboardMaterialModules],
  exports: [dashboardMaterialModules]
})
export class DashboardMaterialModule { }
