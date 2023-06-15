import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class GeolocationService {
    public getLocation(): Promise<GeolocationPosition['coords']> {
        if (!navigator.geolocation)
            throw new Error('Geolocation is not supported by your browser')
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position.coords)
                },
                (error) => {
                    reject(error)
                }
            )
        })
    }
}
