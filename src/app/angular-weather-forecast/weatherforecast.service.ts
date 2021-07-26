import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Forecast{
  public temperature: string | undefined;
  public wind: string | undefined;
}

export class ForecastFuture extends Forecast {
  public day!: number;
}

export class ForecastCity extends Forecast{
  public description: string | undefined;
  public forecast: ForecastFuture[] | undefined

}

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  readonly APIUrl = "https://goweather.herokuapp.com/weather/"

  constructor(private http: HttpClient) { }

  getForecastCity(cityName: string): Observable<any> {
    return this.http.get<any>(this.APIUrl + cityName)
  }
}
