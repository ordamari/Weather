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
    @Output() selectOption = new EventEmitter<T>()

    faSearch = faSearch

    onOptionClick(option: T) {
        this.selectOption.emit(option)
        console.log('option', option)
        this.value = ''
    }

    get isShowOptions() {
        return this.options.length > 0 && this.value.length > 0
    }
}
