import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { WeatherforecastService } from './weatherforecast.service';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    WeatherforecastService
  ]
})
export class AngularWeatherForecastModule { }
