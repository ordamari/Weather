import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastViewComponent } from './forecast-view.component';

describe('ForecastViewComponent', () => {
  let component: ForecastViewComponent;
  let fixture: ComponentFixture<ForecastViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastViewComponent]
    });
    fixture = TestBed.createComponent(ForecastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
