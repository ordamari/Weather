import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnDestroy,
    ViewChild,
} from '@angular/core'
import { Forecast } from '@shared/models/forecast.model'
import { Color, ScaleType } from '@swimlane/ngx-charts'

@Component({
    selector: 'app-area-chart-forecast',
    templateUrl: './area-chart-forecast.component.html',
    styleUrls: ['./area-chart-forecast.component.scss'],
})
export class AreaChartForecastComponent implements AfterViewInit, OnDestroy {
    @ViewChild('componentContainer')
    componentContainer: ElementRef<HTMLDivElement> | null = null
    @Input() forecast!: Forecast
    resizeObserver: ResizeObserver | null = null
    width = 300
    colorScheme: Color = {
        name: 'custom',
        selectable: false,
        group: ScaleType.Linear,
        domain: ['#ffaf04', '#E43414 '],
    }

    ngAfterViewInit() {
        if (!this.componentContainer) return
        this.resizeObserver = new ResizeObserver(() => {
            if (!this.componentContainer) return
            this.width = this.componentContainer.nativeElement.clientWidth
        })
        if (this.resizeObserver) {
            this.resizeObserver.observe(this.componentContainer.nativeElement)
        }
    }

    ngOnDestroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect()
        }
    }

    get view() {
        return [this.width, 50] as [number, number]
    }

    get data() {
        const smallestNumber = Math.min(
            ...this.forecast.DailyForecasts.map(
                (forecast) => forecast.Temperature.Minimum.Value
            )
        )
        return [
            {
                name: 'max',
                series: this.forecast.DailyForecasts.map((forecast) => ({
                    name: forecast.Date,
                    value: forecast.Temperature.Maximum.Value - smallestNumber,
                })),
            },
            {
                name: 'min',
                series: this.forecast.DailyForecasts.map((forecast) => ({
                    name: forecast.Date,
                    value: forecast.Temperature.Minimum.Value - smallestNumber,
                })),
            },
        ]
    }
}
