import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index1Component } from './index1.component';

describe('Index1Component', () => {
  let component: Index1Component;
  let fixture: ComponentFixture<Index1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Index1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
