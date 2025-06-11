import { Component, computed, effect, signal, untracked } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { DeferLoadingComponent } from '../defer-loading/defer-loading.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule, FormsModule, DeferLoadingComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [ReactiveFormsModule],
})
export class ParentComponent {
  effectRefvar: any;
  constructor() {
    //always inside a constructor
    this.effectRefvar = effect(() => {
      console.log(
        'Count changed:',
        this.count(),
        'showCount chags',
        untracked(this.showCount)
      );
      const counter = setTimeout(() => {
        console.log('Counter');
      }, 5000);
      // this.showCount.set(!this.showCount());
      //localStorage.setItem('count', this.count().toString());
      // onCleanup(() => {
      //   console.log('Cleanup effect');
      //   clearTimeout(counter);
      // });
    });
    // effect(() => {
    //   console.log('Show Object changed:', this.showObject());
    //   //this.count.update((value) => value + 1);
    // });
  }
  showObject = signal(
    { name: 'Anand' },
    { equal: (a, b) => a.name === b.name }
  );
  showCount = signal(false);
  count = signal(0);
  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });
  plusThree = signal(0);
  doubleCount = computed(() => {
    return this.count() * 2 + this.plusThree();
  });
  valueToPass = 'Hello from Parent Component';
  childValue = '';
  modelValueToPass = '';
  name = signal('anand');
  computedName = computed(() => {
    return this.name() + this.name();
  });
  //pure function --> same input will give same output
  doubleNumber(num: number): number {
    return num * 2;
  }
  onChange(num: number): void {
    this.valueToPass = 'Hello from Parent Component - updated' + num;
  }
  increase() {
    this.count.update((value) => value + 1);
  }
  plusThreeChange() {
    this.plusThree.set(4);
    this.effectRefvar.destroy();
    this.showObject.set({ name: 'Anand1' });
  }
  toggleShowCount() {
    this.showCount.set(!this.showCount());
    this.showObject.set({ name: 'Anand' });
  }
}
