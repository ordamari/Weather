import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDegreesComponent } from './weather-degrees.component';

describe('WeatherDegreesComponent', () => {
  let component: WeatherDegreesComponent;
  let fixture: ComponentFixture<WeatherDegreesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDegreesComponent]
    });
    fixture = TestBed.createComponent(WeatherDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
