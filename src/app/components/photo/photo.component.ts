import {Component, Input, OnInit} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {AppImage} from '../../classes/AppImage/app-image';
import {FormControl} from '@angular/forms';
import {Page} from '../../enums/pages/page.enum';
import {EventService} from '../../services/events/event.service';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
    capturedPicture: string;
    emailData: string;
    imageDesc: FormControl = new FormControl();
    private Page = Page;
    @Input() rawPage: string;

    constructor(private camera: Camera, private eventsService: EventService, private platform: Platform) {
    }

    ngOnInit() {
    }

    takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.capturedPicture = 'data:image/jpeg;base64,' + imageData;
            this.emailData = 'base64:image.jpeg//' + imageData;
        }, (err) => {
            console.log('Error while taking a picture', err);
        });
    }

    saveImage() {
        navigator.geolocation.getCurrentPosition((geo) => {
            if (this.platform.is('cordova')) {
                this.eventsService.newImageAdded(new AppImage(this.capturedPicture, this.imageDesc.value, geo, this.emailData));
            } else {
                const turl = 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.oxygen.ie%2Fhelp-my-tinder-match-is-trying-to-follow-me-across-the-world%2F&psig=AOvVaw1fuzOFX5GVSBQGMuvYx_RL&ust=1591966723072000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDev6no-ekCFQAAAAAdAAAAABAJ';
                this.eventsService.newImageAdded(new AppImage(turl, this.imageDesc.value, geo, turl));
            }
            this.capturedPicture = null;
            this.imageDesc.setValue('');
        }, (error) => {
            console.log('Error getting geolocation', error);
        });
    }


}
