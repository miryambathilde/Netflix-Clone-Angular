import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSliderComponent } from './movies-slider.component';

describe('MoviesSliderComponent', () => {
  let component: MoviesSliderComponent;
  let fixture: ComponentFixture<MoviesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
