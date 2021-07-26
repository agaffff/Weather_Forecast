import { Component, OnInit } from '@angular/core';
import { ForecastCity, WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ WeatherforecastService]
})
export class MainComponent implements OnInit {
  forecastCity!: ForecastCity;

  cities: any[] = [
    {value: "Empty", name: "Выберите город"},
    {value: "Kyiv", name: "Киев"},
    {value: "Odesa", name: "Одесса"}
  ]
  visibleForecast = false;

  constructor(public service: WeatherforecastService) { }

  ngOnInit(): void { 
   
  }

  //получаем прогноз погоды
  getForecast(cityName: string){
    if(cityName == "Empty"){
      this.visibleForecast = false;
      return
    }
    this.service.getForecastCity(cityName)
    .subscribe(data => {
      this.forecastCity = data;
      console.log(this.forecastCity);
      this.visibleForecast = true;
    });
    }

  

}
