import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapPaneComponent } from './map-pane/map-pane.component';
@NgModule({
  declarations: [
    AppComponent,
    MapPaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxApiToken, // Optional, can also be set per map (accessToken input of mgl-map)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
