import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconsComponent } from './weather-icons.component';

describe('WeatherIconsComponent', () => {
  let component: WeatherIconsComponent;
  let fixture: ComponentFixture<WeatherIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherIconsComponent]
    });
    fixture = TestBed.createComponent(WeatherIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
