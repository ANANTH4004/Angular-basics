import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  contentChild,
  ElementRef,
  Signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-content-child',
  imports: [ChildComponent],
  templateUrl: './view-content-child.component.html',
  styleUrl: './view-content-child.component.scss',
})
export class ViewContentChildComponent
  implements AfterViewInit, AfterContentInit, AfterContentChecked
{
  childComponent = viewChild.required(ChildComponent);
  inputValue: Signal<ElementRef | undefined> = viewChild.required('inputValue');
  @ViewChild('inputValue') inputValue1!: ElementRef<HTMLInputElement>;
  @ViewChild(ChildComponent) childComponent1!: ChildComponent;

  @ContentChild('projectedContent') projectedContent: any;

  ngAfterViewInit(): void {
    this.childComponent().sayHello();
    const val = this.inputValue();
    console.log(this.childComponent1);
    if (val) {
      val.nativeElement.value = 'Hello from Parent Component using signal';
    }
    console.log('after view inint', this.projectedContent);
  }

  ngAfterContentInit(): void {
    console.log('after content inint', this.projectedContent);
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }

  changeContent() {
    this.projectedContent.nativeElement.innerHTML =
      'Hello from Parent Component';
  }

  changeInput() {
    this.inputValue1.nativeElement.value = 'edited value from ts file';
    console.log(this.childComponent1);
    //this.childComponent().childValue = 'from view child component ts file';
    //this.childComponent1.childValue1 = 'from view child component ts file';
  }
}
