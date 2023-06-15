import { tap } from 'rxjs'
import type { MonoTypeOperatorFunction } from 'rxjs'
import type { ZodType } from 'zod'
import { ToastrService } from 'ngx-toastr'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class ZodUtils {
    constructor(private toaster: ToastrService) {}

    public parseResponse<T>(schema: ZodType): MonoTypeOperatorFunction<T> {
        return tap({
            next: (value: T) => {
                const parsed = schema.safeParse(value)
                if (!parsed.success) {
                    this.toaster.error('something happen, try again later!')
                    throw new Error(parsed.error.message)
                }
            },
        })
    }
}
