import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: 'user',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'user/val',
    component: UserComponent,
  },
];
