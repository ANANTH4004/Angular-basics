import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router-example',
  imports: [RouterOutlet],
  templateUrl: './router-example.component.html',
  styleUrl: './router-example.component.scss',
})
export class RouterExampleComponent {
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      data['users'].subscribe((res: any) => {
        console.log(res);
      });
    });
  }
}
