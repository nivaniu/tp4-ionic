import {Component, OnInit} from '@angular/core';
import {Environment, GoogleMap, GoogleMaps, GoogleMapsMapTypeId} from '@ionic-native/google-maps';
import {Google} from '../../enums/google/google.enum';
import {Platform} from '@ionic/angular';
import {EventService} from '../../services/events/event.service';
import {NavigationEnd, Router} from '@angular/router';
import {AppImage} from '../../classes/AppImage/app-image';
import {AppCords} from '../../classes/AppGeolocation/app-cords';
import {NavPath} from '../../classes/NavPath/nav-path';
import {Page} from '../../enums/pages/page.enum';

@Component({
    selector: 'app-localisation',
    templateUrl: './localisation.component.html',
    styleUrls: ['./localisation.component.scss'],
})
export class LocalisationComponent implements OnInit {
    map: GoogleMap;
    cordsSet: Array<AppCords> = [];
    constructor(private platform: Platform, eventsService: EventService, private router: Router) {
        if (this.platform.is('cordova')) {
            this.router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const navPath = new NavPath(router.url.split('/'));
                    if (navPath.getRawLastPageName() === Page.LOCALISATION_STANDARD) {
                        this.map = null;
                        this.loadMap();
                        this.cordsSet = [];
                        eventsService.getAppImages().forEach((img: AppImage) => {
                            this.setMarker(img);
                        });
                    }
                }
            });
        }
    }

    private setMarker(img: AppImage) {
        if (img == null) {
            return;
        }
        const cordsToSet: AppCords = new AppCords(img.getLat(), img.getLng());
        // To avoid superposition of markers, i adjust a little bit it's coordinates
        // If i'll have time i'll add a MarkCluster to handle this kind of problem
        this.cordsSet.forEach((cords) => {
            if (cordsToSet.lat === cords.lat && cordsToSet.lon === cords.lon) {
                cordsToSet.lat += 0.000005;
            }
        });
        this.cordsSet.push(cordsToSet);
        this.map.addMarkerSync({
            title: img.description,
            icon: 'red',
            animation: 'DROP',
            position: {
                lat: cordsToSet.lat,
                lng: cordsToSet.lon
            }
        });

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
