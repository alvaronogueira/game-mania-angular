import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCarouselComponent } from './temp-carousel.component';

describe('TempCarouselComponent', () => {
  let component: TempCarouselComponent;
  let fixture: ComponentFixture<TempCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
