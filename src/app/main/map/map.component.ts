import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() sensors: any;
  sensorArrayLength: number;
  map: any;
  canAddDevice: boolean = false;
  co2RedIcon = this.addIcon('assets/co2red.svg');
  co2YellowIcon = this.addIcon('assets/co2yellow.svg');
  co2GreenIcon = this.addIcon('assets/co2green.svg');
  soundRedIcon = this.addIcon('assets/soundred.svg');
  soundYellowIcon = this.addIcon('assets/soundyellow.svg');
  soundGreenIcon = this.addIcon('assets/soundgreen.svg');
  location = L.icon({
    iconUrl: 'assets/location.svg',
    iconSize:     [10, 10], // size of the icon
    iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
  });
  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.map = L.map('map').setView([65.0586010, 25.4659], 20);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        minZoom: 5,
        maxZoom: 25
    }).addTo(this.map);
    //geolocation
    this.map.locate({setView: false});
    this.map.on('locationfound', this.onLocationFound.bind(this));
    //click event handling(add marker)
    this.map.on('click', this.addNewDevice.bind(this) );
    //add linnanmaa campus overlay
    this.addCampusOverlay( this.map );
    //Add sensor markers
    this.addMarkersToMap( this.map );
    this.sensorArrayLength = this.sensors.length;
  }

  ngDoCheck(){
    if(this.sensors.length > this.sensorArrayLength){
      this.addMarkersToMap( this.map );
      this.sensorArrayLength = this.sensors.length;
    }
  }


  addIcon ( iconUrl: string ): any {
    //specifies an icon template that can then be used on a leaflet map 
    const icon = L.icon({
      iconUrl: iconUrl,
      iconSize:     [30, 30], // size of the icon
      iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
      popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
    });
    return icon;
  }

  chooseIcon( device ){
    //Returns an icon based on a devices status and type
    let icon = this.co2RedIcon;
    if(device.deviceType === 'co2Sensor'){
      if(device.status === 'receiving'){
        icon = this.co2GreenIcon;
      }else if(device.status === 'installed'){
        icon = this.co2YellowIcon;
      }else if(device.status === 'removed'){
        icon = this.co2RedIcon;
      }
    } else if(device.deviceType === 'soundSensor'){
      if(device.status === 'receiving'){
        icon = this.soundGreenIcon;
      }else if(device.status === 'installed'){
        icon = this.soundYellowIcon;
      }else if(device.status === 'removed'){
        icon = this.soundRedIcon;
      }
    }
    return icon;
  }

  

  addCampusOverlay( map ){
    //Adds a campus overlay to given map
    let svgElement = 'assets/map.png';
    let svgElementBounds = [ [ 65.06202, 25.46249 ], [ 65.056335, 25.47145 ] ];
    L.imageOverlay(svgElement, svgElementBounds).addTo(map);
  }

  addMarkersToMap( map ){
    //Loops through the sensors list and adds a marker with a popup to the map
    for(let i=0; i < this.sensors.length; i++){

      if(this.sensors[i].deviceType === 'co2Sensor'){
        let popup = '<p>'+ this.sensors[i].deviceId + '</p>'
        L.marker([this.sensors[i].coordinates.latitude - 0.00009 , this.sensors[i].coordinates.longitude  + 0.00036], {icon: this.chooseIcon(this.sensors[i])}).addTo(map).bindPopup(popup);;

      } else if(this.sensors[i].deviceType === 'soundSensor'){

        let popup = '<p>Hello world!<br />This is a fancy popup.</p><br /><img class="popup" src="assets/ERSsensor.jpg">' + '<p>Sound sensor looks like this<p/>'
        L.marker([this.sensors[i].coordinates.latitude, this.sensors[i].coordinates.longitude], {icon: this.chooseIcon(this.sensors[i])}).addTo(map).bindPopup(popup);;

      }
    }
  }
  onLocationFound(event) {
    console.log("geolocating");
    let radius = event.accuracy;

    L.marker(event.latlng, {icon: this.location} ).addTo(this.map)
        .bindPopup("You are within " + radius + " meters from this point");

    L.circle(event.latlng, radius).addTo(this.map);
  }
  
  addNewDevice( event ) {
    if(this.canAddDevice){
      this.deviceService.openNewDeviceDialog( event.latlng.lat, event.latlng.lng )
      this.disableDeviceAdd()
      }
  }
  disableDeviceAdd(){
    console.log("action cancelled");
    this.canAddDevice = false;
  }
  enableDeviceAdd(){
    console.log("device add enabled");
    this.canAddDevice = true;
  }
}
