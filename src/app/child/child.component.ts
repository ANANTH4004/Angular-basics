import { Component, input, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  valueFromParent = input('', {
    alias: 'childValue',
    transform: transformToUppercase,
  });
  childValue = 'Hello from Child Component';

  fromParent = model();
}
function transformToUppercase(value: string | undefined): string {
  return value?.toUpperCase() ?? '';
}
