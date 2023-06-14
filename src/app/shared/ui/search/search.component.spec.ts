import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SearchComponent } from './search.component'

describe('SearchComponent', () => {
    let component: SearchComponent<object>
    let fixture: ComponentFixture<SearchComponent<object>>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
