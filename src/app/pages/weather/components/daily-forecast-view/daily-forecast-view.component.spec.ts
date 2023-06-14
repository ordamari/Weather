import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastViewComponent } from './daily-forecast-view.component';

describe('DailyForecastViewComponent', () => {
  let component: DailyForecastViewComponent;
  let fixture: ComponentFixture<DailyForecastViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyForecastViewComponent]
    });
    fixture = TestBed.createComponent(DailyForecastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
