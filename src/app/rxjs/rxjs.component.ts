import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent implements OnInit {
  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      console.log('Promise started!');
      resolve('Promise resolved!');
    });

    promise.then((res) => console.log(res));
    console.log('Promise finished!');
  }
}
