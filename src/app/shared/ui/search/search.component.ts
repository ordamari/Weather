import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from '@angular/core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import openOptionsAnimation from '@shared/animations/open-options.animation'
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader'
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [openOptionsAnimation],
})
export class SearchComponent<T extends object> implements OnDestroy {
    @Input() isLoad = false
    @Input() options: T[] = []
    @Input() labelKey!: keyof T
    @Input() set value(val: string) {
        this._value = val
        this.highlightedIndex = 0
        this.valueChange.emit(val)
    }
    get value() {
        return this._value
    }
    private _value = ''
    @Output() valueChange = new EventEmitter<string>()
    @Output() selectOption = new EventEmitter<T>()

    get isShowOptions() {
        return (
            this.options.length > 0 && this.value.length > 0 && this.isFocused
        )
    }

    get showOptionsSituation() {
        return this.isShowOptions ? 'out' : 'in'
    }

    skeletonTheme: NgxSkeletonLoaderComponent['theme'] = {
        margin: '1rem',
        backgroundColor: '#15202B',
        width: 'calc(100% - 2rem)',
        height: '2.5rem',
    }

    faSearch = faSearch
    timeout: NodeJS.Timeout | null = null
    isFocused = false
    highlightedIndex = 0

    onOptionClick(option: T) {
        this.selectOption.emit(option)
        console.log('option', option)
        this.value = ''
    }

    onBlur() {
        this.timeout = setTimeout(() => (this.isFocused = false), 500)
    }

    nextHighlightedIndex() {
        if (this.highlightedIndex === this.options.length - 1)
            this.highlightedIndex = 0
        else this.highlightedIndex += 1
    }

    prevHighlightedIndex() {
        if (this.highlightedIndex === 0)
            this.highlightedIndex = this.options.length - 1
        else this.highlightedIndex -= 1
    }

    onKeyDown(event: KeyboardEvent) {
        const preventDefaultOption = ['ArrowDown', 'ArrowUp', 'Enter']
        if (preventDefaultOption.includes(event.key)) {
            event.preventDefault()
            switch (event.key) {
                case 'ArrowDown':
                    this.nextHighlightedIndex()
                    break
                case 'ArrowUp':
                    this.prevHighlightedIndex()
                    break
                case 'Enter':
                    this.onOptionClick(this.options[this.highlightedIndex])
                    break
            }
        }
    }

    ngOnDestroy(): void {
        if (this.timeout) clearTimeout(this.timeout)
    }
}
