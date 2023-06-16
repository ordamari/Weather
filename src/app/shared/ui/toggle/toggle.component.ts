import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
    @Input() id = 'switch'
    @Input() set value(val: boolean | null) {
        this._value = !!val
        this.valueChange.emit(!!val)
    }
    get value() {
        return this._value
    }
    private _value = false
    @Output() valueChange = new EventEmitter<boolean>()

    onChange() {
        this.value = !this.value
    }
}
