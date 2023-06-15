import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private router: Router) {}
    faHeart = faHeart
    faCloudSun = faCloudSun
}
