import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const teachersMaterialModules = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [teachersMaterialModules],
  exports: [teachersMaterialModules]
})
export class TeachersMaterialModule { }
