import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularWeatherForecastModule } from './angular-weather-forecast/angular-weather-forecast.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularWeatherForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
