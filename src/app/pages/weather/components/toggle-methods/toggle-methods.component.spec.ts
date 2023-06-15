import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ToggleMethodsComponent } from './toggle-methods.component'

describe('ToggleMethodsComponent', () => {
    let component: ToggleMethodsComponent
    let fixture: ComponentFixture<ToggleMethodsComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ToggleMethodsComponent],
        })
        fixture = TestBed.createComponent(ToggleMethodsComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
