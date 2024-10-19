import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./modules/pages/courses/courses.module').then(
        (m) => m.CoursesModule
      ),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./modules/pages/teachers/teachers.module').then(
        (m) => m.TeachersModule
      ),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./modules/pages/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./modules/pages/support/support.module').then(
        (m) => m.SupportModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
