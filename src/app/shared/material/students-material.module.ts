import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const studentsMaterialModules = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [studentsMaterialModules],
  exports: [studentsMaterialModules]
})
export class StudentsMaterialModule { }
