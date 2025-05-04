import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Children1Component } from './children1.component';

describe('Children1Component', () => {
  let component: Children1Component;
  let fixture: ComponentFixture<Children1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Children1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Children1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
