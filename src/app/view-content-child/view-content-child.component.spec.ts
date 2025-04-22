import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContentChildComponent } from './view-content-child.component';

describe('ViewContentChildComponent', () => {
  let component: ViewContentChildComponent;
  let fixture: ComponentFixture<ViewContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
