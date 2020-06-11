import {Component, OnInit} from '@angular/core';
import {Environment, GoogleMap, GoogleMaps, GoogleMapsMapTypeId} from '@ionic-native/google-maps';
import {Google} from '../../enums/google/google.enum';
import {Platform} from '@ionic/angular';
import {EventService} from '../../services/events/event.service';

@Component({
    selector: 'app-localisation',
    templateUrl: './localisation.component.html',
    styleUrls: ['./localisation.component.scss'],
})
export class LocalisationComponent implements OnInit {
    map: GoogleMap;

    constructor(private platform: Platform, eventsService: EventService) {
        if (this.platform.is('cordova')) {
            this.loadMap();
            eventsService.getAppImages().forEach((img) => {
                this.map.addMarkerSync({
                    title: img.description,
                    icon: 'red',
                    animation: 'DROP',
                    position: {
                        lat: img.getLat(),
                        lng: img.getLng()
                    }
                });
            });
        }
        console.log('localisation Constr');
    }

    ngOnInit() {
    }

    private loadMap() {
        Environment.setEnv({
            API_KEY_FOR_BROWSER_DEBUG: Google.API,
            API_KEY_FOR_BROWSER_RELEASE: Google.API
        });
        this.map = GoogleMaps.create('map_canvas', {
            camera: {
                target: {
                    lat: 47.700000,
                    lng: 2.183333
                },
                zoom: 12,
                tilt: 30
            }
        });
        this.map.setMapTypeId(GoogleMapsMapTypeId.NORMAL);
        console.log('map loaded');
    }
}
