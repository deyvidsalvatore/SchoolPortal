import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const coursesMaterialModules = [
  MatIconModule,
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [coursesMaterialModules],
  exports: [coursesMaterialModules]
})
export class CoursesMaterialModule { }
