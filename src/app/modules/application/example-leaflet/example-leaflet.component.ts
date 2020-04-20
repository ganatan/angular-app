import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-example-leaflet',
  templateUrl: './example-leaflet.component.html',
  styleUrls: ['./example-leaflet.component.css']
})
export class ExampleLeafletComponent implements OnInit {

  optionsSpec: any = {
    layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],
    zoom: 11,
    center: [43.296174, 5.369953]
  };
  zoom = this.optionsSpec.zoom;
  center = latLng(this.optionsSpec.center);

  options = {
    layers: [tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution })],
    zoom: this.optionsSpec.zoom,
    center: latLng(this.optionsSpec.center)
  };

  constructor() { }

  ngOnInit() {
  }

}
