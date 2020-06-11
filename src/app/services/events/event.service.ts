import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AppImage} from '../../classes/AppImage/app-image';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private NEW_IMAGE_ADDED = new BehaviorSubject(null);
    onNewImageAdded = this.NEW_IMAGE_ADDED.asObservable();
    private appImages: AppImage[] = [];

    constructor() {
    }

    newImageAdded(img: AppImage) {
        console.log('new image added', img);
        this.appImages[this.appImages.length] = img;
        this.NEW_IMAGE_ADDED.next(img);
    }

    getAppImages() {
        return this.appImages;
    }
}
