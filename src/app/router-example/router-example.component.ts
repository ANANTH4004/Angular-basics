import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-example',
  imports: [],
  templateUrl: './router-example.component.html',
  styleUrl: './router-example.component.scss',
})
export class RouterExampleComponent {
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      data['data'].subscribe((res: any) => {
        console.log(res);
      });
    });
  }
}
