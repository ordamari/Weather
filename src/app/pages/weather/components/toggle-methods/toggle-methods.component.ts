import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Method } from '@shared/enums/method.enum'

@Component({
    selector: 'app-toggle-methods',
    templateUrl: './toggle-methods.component.html',
    styleUrls: ['./toggle-methods.component.scss'],
})
export class ToggleMethodsComponent {
    @Input() method: Method | null = Method.Metric
    @Output() toggleMethod = new EventEmitter<undefined>()

    get buttonText() {
        return this.method === Method.Metric ? 'C' : 'F'
    }
}
