import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Children2Component } from './children2.component';

describe('Children2Component', () => {
  let component: Children2Component;
  let fixture: ComponentFixture<Children2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Children2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Children2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
