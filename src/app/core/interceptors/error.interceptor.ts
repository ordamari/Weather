import { Injectable } from '@angular/core'
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService) {}

    isClientSideError(error: HttpErrorResponse): boolean {
        return error.error instanceof ErrorEvent
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = ''
                if (this.isClientSideError(error)) {
                    this.toastr.error('Something happen, try again later!')
                    errorMsg = `Error: ${error.error.message}`
                } else {
                    this.toastr.error('Something happen, try again later!')
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`
                }
                return throwError(() => new Error(errorMsg))
            })
        )
    }
}
