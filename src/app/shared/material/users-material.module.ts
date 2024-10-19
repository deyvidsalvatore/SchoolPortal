import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const usersMaterialModules = [
  MatTabsModule,
  MatIconModule,
  MatTabsModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [usersMaterialModules],
  exports: [usersMaterialModules]
})
export class UsersMaterialModule { }
