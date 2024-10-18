import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatTabsModule,
  MatIconModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules]
})
export class UsersMaterialModule { }
