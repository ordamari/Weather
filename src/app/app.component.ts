import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Theme } from '@shared/enums/theme.enum'
import { Observable } from 'rxjs'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private store: Store) {}
    theme$: Observable<Theme> = this.store.select(
        (state: any) => state.preferences.theme
    )

    title = 'weather'
}
