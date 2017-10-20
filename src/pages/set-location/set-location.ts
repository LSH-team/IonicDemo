import {Component} from '@angular/core';
import {Location} from "../../models/location";
import {NavParams, ViewController} from "ionic-angular";

@Component({
    selector: 'page-set-location',
    templateUrl: 'set-location.html',
})
export class SetLocationPage {
    location: Location;
    marker: Location;

    constructor(private navParams: NavParams,
                private viewCtrl: ViewController) {
        this.location = this.navParams.get('location');
        if (this.navParams.get('isSet')) {
            this.marker = this.location;
        }
    }

    onSetMarker(e: any) {
        console.log(e);
        this.marker = new Location(e.coords.lat, e.coords.lng);
    }

    onConfirm() {
        this.viewCtrl.dismiss({location: this.marker});
    }

    onAbort() {
        this.viewCtrl.dismiss();
    }
}