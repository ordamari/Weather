import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SkeletonWeatherComponent } from './skeleton-weather.component'

describe('SkeletonWeatherComponent', () => {
    let component: SkeletonWeatherComponent
    let fixture: ComponentFixture<SkeletonWeatherComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SkeletonWeatherComponent],
        })
        fixture = TestBed.createComponent(SkeletonWeatherComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
