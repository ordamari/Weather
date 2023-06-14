import { tap } from 'rxjs'
import type { MonoTypeOperatorFunction } from 'rxjs'
import type { ZodType } from 'zod'
import { environment } from '@env/environment'

export function parseResponse<T>(schema: ZodType): MonoTypeOperatorFunction<T> {
    return tap({
        next: (value: T) => {
            if (!environment.production) {
                // throw in development so we're aware of the error
                schema.parse(value)
            } else {
                const parsed = schema.safeParse(value)
                if (!parsed.success) {
                    // log to service to be informed
                    console.log(parsed.error)
                }
            }
        },
    })
}
