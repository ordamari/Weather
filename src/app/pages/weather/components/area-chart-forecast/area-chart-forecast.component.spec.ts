import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AreaChartForecastComponent } from './area-chart-forecast.component'

describe('AreaChartForecastComponent', () => {
    let component: AreaChartForecastComponent
    let fixture: ComponentFixture<AreaChartForecastComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AreaChartForecastComponent],
        })
        fixture = TestBed.createComponent(AreaChartForecastComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
