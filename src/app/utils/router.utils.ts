import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

export const resolverFunction: ResolveFn<any> = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const httpClient = inject(HttpClient);
  return httpClient.get('https://jsonplaceholder.typicode.com/users');
};
