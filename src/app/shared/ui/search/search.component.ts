import { Component, EventEmitter, Input, Output } from '@angular/core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent<T extends object> {
    @Input() options: T[] = []
    @Input() labelKey!: keyof T
    @Input() set value(val: string) {
        this._value = val
        this.valueChange.emit(val)
    }
    get value() {
        return this._value
    }
    private _value = ''
    @Output() valueChange = new EventEmitter<string>()

    faSearch = faSearch
    search = ''

    get isShowOptions() {
        return this.options.length > 0
    }
}
