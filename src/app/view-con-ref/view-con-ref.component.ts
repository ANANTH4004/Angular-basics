import {
  Component,
  ViewChild,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { WeatherContentComponent } from '../dynamic-component-loading/widgets/weather-content.component';

@Component({
  selector: 'app-view-con-ref',
  imports: [WeatherContentComponent],
  templateUrl: './view-con-ref.component.html',
  styleUrl: './view-con-ref.component.scss',
})
export class ViewConRefComponent {
  @ViewChild('dynamicComponetRef', { read: ViewContainerRef, static: true })
  container1!: ViewContainerRef;
  container = viewChild('dynamicComponetRef', { read: ViewContainerRef });
  ngOnInit() {
    //this.container.createComponent(WeatherContentComponent);
    this.container1.createComponent(WeatherContentComponent);
  }
}
