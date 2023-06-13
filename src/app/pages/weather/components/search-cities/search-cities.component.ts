import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/common/types/city.type';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.scss'],
})
export class SearchCitiesComponent implements OnInit {
  query: string = '';
  cities: City[] = [];
  timeOut: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onQueryChange(query: string) {
    this.debouncedGetCities(query);
    this.query = query;
  }

  debouncedGetCities(query: string) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.weatherService.getCities(query);
    }, 500);
  }
}
