import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'pbd-map-pane',
  templateUrl: './map-pane.component.html',
  styleUrls: ['./map-pane.component.scss']
})
export class MapPaneComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onMapLoaded($event: mapboxgl.Map){
    this.map = $event
    console.log(this.map)
  }
}
