import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SearchComponent } from './search.component'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LoaderComponent } from '../loader/loader.component'
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'

@NgModule({
    declarations: [SearchComponent, LoaderComponent],
    exports: [SearchComponent],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        NgxSkeletonLoaderModule,
    ],
})
export class SearchModule {}
