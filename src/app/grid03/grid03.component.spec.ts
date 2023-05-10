import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid03Component } from './grid03.component';

describe('Grid03Component', () => {
  let component: Grid03Component;
  let fixture: ComponentFixture<Grid03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Grid03Component]
    });
    fixture = TestBed.createComponent(Grid03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
