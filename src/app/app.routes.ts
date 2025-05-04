import { ActivatedRoute, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DeferLoadingComponent } from './defer-loading/defer-loading.component';
import { ParentComponent } from './parent/parent.component';
import { ViewContentChildComponent } from './view-content-child/view-content-child.component';
import { DynamicComponentLoadingComponent } from './dynamic-component-loading/dynamic-component-loading.component';
import { ViewConRefComponent } from './view-con-ref/view-con-ref.component';
import { RouterExampleComponent } from './router-example/router-example.component';
import { resolverFunction } from './utils/router.utils';
import { Children1Component } from './router-example/children/children1/children1.component';
import { Children2Component } from './router-example/children/children2/children2.component';

export const routes: Routes = [
  {
    path: 'router',
    component: RouterExampleComponent,
    //  data: { title: 'Router Example', value: 'Router value' },
    resolve: { users: resolverFunction },
    canActivate: [() => true],
    canActivateChild: [() => true],
    canDeactivate: [() => true],
    children: [
      { path: 'children1', component: Children1Component },
      {
        path: 'children2',
        component: Children2Component,
      },
    ],
  },
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
  {
    path: 'viewchild',
    component: ViewContentChildComponent,
  },
  {
    path: 'dynamic',
    component: DynamicComponentLoadingComponent,
  },
  {
    path: 'viewcon',
    component: ViewConRefComponent,
  },
];
