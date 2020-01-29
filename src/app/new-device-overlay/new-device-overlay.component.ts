import { Component, OnInit, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeviceService } from 'src/app/device.service';

export interface DialogData {
  value: string;
  animal: string;
  name: string;
  foods: [];
}
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-device-overlay',
  templateUrl: './new-device-overlay.component.html',
  styleUrls: ['./new-device-overlay.component.css']
})
export class NewDeviceOverlayComponent implements OnInit {
  @Input() overlayOpen: boolean;
  latitude: any;
  longitude: any;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  animal: string;
  name: string;
  value: string;
  constructor(private deviceService: DeviceService, public dialog: MatDialog) {}

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(this.deviceService.overlay){
      /*this.longitude = this.deviceService.longitude;
      this.latitude = this.deviceService.latitude;
      console.log(this.latitude, this.longitude);
      const device = {deviceType: 'soundSensor', 
                      status: 'planned',
                      deviceId: 'installedDevicesId', 
                      locationId: 'univOulu1', 
                      coordinates: {latitude: this.latitude, longitude: this.longitude}};
      this.deviceService.addDeviceToDatabase(device);*/
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {name: this.name, animal: this.animal, foods: this.foods, value: this.value}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
        console.log(this.animal);
      });

    }}}

@Component({
  selector: 'new-device-overlay-dialog',
  templateUrl: 'new-device-overlay-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}