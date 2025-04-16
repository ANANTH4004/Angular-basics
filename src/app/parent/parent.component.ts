import { Component, computed, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [ReactiveFormsModule],
})
export class ParentComponent {
  valueToPass = 'Hello from Parent Component';
  childValue = '';
  modelValueToPass = '';
  name = signal('anand');
  computedName = computed(() => {
    return this.name() + this.name();
  });
}
