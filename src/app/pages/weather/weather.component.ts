import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
} from 'rxjs';
import { City } from 'src/app/common/types/city.type';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
