import { Component, Input } from '@angular/core'
import { Theme } from '@shared/enums/theme.enum'
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader'

@Component({
    selector: 'app-skeleton-weather',
    templateUrl: './skeleton-weather.component.html',
    styleUrls: ['./skeleton-weather.component.scss'],
})
export class SkeletonWeatherComponent {
    @Input() theme: Theme | null = Theme.Light

    get skeletonBaseTheme(): NgxSkeletonLoaderComponent['theme'] {
        return this.theme === Theme.Light ? {} : { backgroundColor: '#15202B' }
    }

    get largeIconsTheme(): NgxSkeletonLoaderComponent['theme'] {
        return {
            ...this.skeletonBaseTheme,
            width: '90px',
            height: '90px',
        }
    }

    get smallIconsTheme(): NgxSkeletonLoaderComponent['theme'] {
        return {
            ...this.skeletonBaseTheme,
            width: '50px',
            height: '50px',
        }
    }

    get smallTextTheme(): NgxSkeletonLoaderComponent['theme'] {
        return {
            ...this.skeletonBaseTheme,
            width: '50px',
            height: '1rem',
        }
    }

    get largeTextTheme(): NgxSkeletonLoaderComponent['theme'] {
        return {
            ...this.skeletonBaseTheme,
            width: '100px',
            height: '1.7rem',
        }
    }

    get lineTheme(): NgxSkeletonLoaderComponent['theme'] {
        return {
            ...this.skeletonBaseTheme,
            width: '100%',
            height: '2rem',
        }
    }
}
