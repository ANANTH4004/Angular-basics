import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [FormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent implements OnInit {
  ngOnInit(): void {
    //Promise example eagarly loading
    const promise = new Promise((resolve, reject) => {
      console.log('Promise started!');
      resolve('Promise resolved!');
    });

    promise.then((res) => console.log(res));
    console.log('Promise finished!');

    //Observable example lazily loading
    const observable = new Observable((observer) => {
      console.log('Observable started!');
      observer.next('Observable emitted!');
      observer.complete();
    });
    observable.subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
      complete: () => console.log('Observable completed!'),
    });
    console.log('Observable subscription finished!');
  }
}
