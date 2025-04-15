import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  valueFromParent = input('', {
    alias: 'childValue',
    transform: transformToUppercase,
  });
  childValue = 'Hello from Child Component';
}
function transformToUppercase(value: string | undefined): string {
  return value?.toUpperCase() ?? '';
}
