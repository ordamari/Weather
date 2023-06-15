import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { setTheme } from '@app/store/preferences/preferences.actions'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { Theme } from '@shared/enums/theme.enum'
import { Observable, Subscription, tap } from 'rxjs'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    constructor(private router: Router, private store: Store) {}

    faHeart = faHeart
    faCloudSun = faCloudSun
    _isLightMode = true
    subscription: Subscription | null = null

    get isLightMode(): boolean {
        return this._isLightMode
    }

    set isLightMode(val: boolean) {
        this._isLightMode = val
        this.store.dispatch(setTheme(val ? Theme.Light : Theme.Dark))
    }

    theme$: Observable<Theme> = this.store
        .select((state: any) => state.preferences.theme)
        .pipe(
            tap((theme: Theme) => {
                this.isLightMode = theme === Theme.Light
            })
        )

    ngOnInit(): void {
        this.subscription = this.theme$.subscribe()
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe()
    }
}
