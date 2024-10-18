import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const supportMaterialModules = [
  MatButtonModule,
  MatIconModule
];


@NgModule({
  declarations: [],
  imports: [supportMaterialModules],
  exports: [supportMaterialModules]
})
export class SupportMaterialModule { }
