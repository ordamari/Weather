import { ErrorHandler, Injectable } from '@angular/core'
import { environment } from '@env/environment'

@Injectable()
export class Logger {
    constructor(private errorHandler: ErrorHandler) {}

    log(value: unknown, ...rest: unknown[]) {
        if (!environment.production) {
            console.log(value, ...rest)
        }
    }

    error(error: Error) {
        this.errorHandler.handleError(error)
    }

    warn(value: unknown, ...rest: unknown[]) {
        console.warn(value, ...rest)
    }
}
