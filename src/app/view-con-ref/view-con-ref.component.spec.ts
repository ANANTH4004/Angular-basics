import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConRefComponent } from './view-con-ref.component';

describe('ViewConRefComponent', () => {
  let component: ViewConRefComponent;
  let fixture: ComponentFixture<ViewConRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewConRefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
