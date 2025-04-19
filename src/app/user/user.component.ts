import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  OnChanges,
  OnInit,
  signal,
  Signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [FormsModule, CommonModule, FilterPipe],
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild('text') textvalue: ElementRef | undefined; //old way
  uservalue: Signal<string> = signal('user');

  textBox: Signal<ElementRef | undefined> = viewChild('text');

  computedTextValue = computed(() => this.uservalue().toUpperCase());

  ngOnInit(): void {
    console.log(
      'valuye',
      (this.textBox() as ElementRef).nativeElement.value.toUpperCase()
    );
    console.log(this.textBox(), '\n', this.textvalue);
    console.log('UserComponent ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('UserComponent ngAfterViewInit');
    console.log(this.textBox(), '\n', this.textvalue);
  }
  valueChanges(): void {
    console.log(
      'UserComponent ngOnChanges',
      this.textBox()?.nativeElement.value
    );
  }

  // pipe example
  searchTerm = '';
  users = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
    { name: 'David' },
  ];

  addUser(): void {
    this.users.push({ name: 'Anand' });
  }
}
