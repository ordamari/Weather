import { Component, EventEmitter, Input, Output } from '@angular/core'
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent<T extends object> {
    private _value = ''

    @Input() options: T[] = []
    @Input() labelKey!: keyof T

    @Input() set value(val: string) {
        this._value = val
        this.valueChange.emit(val)
    }
    get value() {
        return this._value
    }
    @Output() valueChange = new EventEmitter<string>()

    search = ''
}
