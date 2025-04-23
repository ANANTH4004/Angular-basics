import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  inject,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { WeatherContentComponent } from './widgets/weather-content.component';
import { WidgetComponent } from './widgets/widget.component';

@Component({
  selector: 'app-dynamic-component-loading',
  imports: [NgComponentOutlet, WeatherContentComponent],
  templateUrl: './dynamic-component-loading.component.html',
  styleUrl: './dynamic-component-loading.component.scss',
})
export class DynamicComponentLoadingComponent {
  vcr = inject(ViewContainerRef);
  contentTpl = viewChild<TemplateRef<unknown>>('contentTpl');
  protected content: Node[][] = [];
  protected component: Type<WidgetComponent> | null = null;
  protected componentInputs = {
    title: 'Weather',
    description: 'Currently in Vienna:',
  };

  createComponent() {
    this.content = [this.vcr.createEmbeddedView(this.contentTpl()!).rootNodes];
    this.component = WidgetComponent;
  }
  destroyComponent() {
    this.component = null;
  }
}
