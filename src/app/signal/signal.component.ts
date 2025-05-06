import { JsonPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-signal',
  imports: [JsonPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  refObject = {
    name: 'Angular',
  };
  signalObject = signal([this.refObject], { equal: _.isEqual });
  computedSignal = computed(() => {
    return this.signalObject()[0].name + ' is awesome!';
  });

  constructor() {
    effect(() => {
      console.log('Signal Object:', this.signalObject());
      console.log('Computed Signal:', this.computedSignal());
    });
  }

  ngOnInit() {
    this.signalObject.set([{ name: 'Angular 16' }]);
  }
  changeSignal() {
    this.signalObject.set([{ name: 'Angular 17' }]);
  }
}
