import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DeferLoadingComponent } from './defer-loading/defer-loading.component';
import { ParentComponent } from './parent/parent.component';

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
  {
    path: 'parent',
    component: ParentComponent,
  },
];
