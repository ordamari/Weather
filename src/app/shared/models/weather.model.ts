import { z } from 'zod'

export const weatherSchema = z.object({
    coord: z.object({
        lon: z.number(),
        lat: z.number(),
    }),
})

export type Weather = z.infer<typeof weatherSchema>
