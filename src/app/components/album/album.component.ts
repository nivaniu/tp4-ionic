import {Component, Input, OnInit} from '@angular/core';
import {AppImage} from '../../classes/AppImage/app-image';
import {EventService} from '../../services/events/event.service';
import {Page} from '../../enums/pages/page.enum';
import {EmailComposer} from '@ionic-native/email-composer/ngx';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
    appImages: AppImage[] = [];
    @Input() rawPage: string;
    Page = Page;

    constructor(private eventsService: EventService, private emailComposer: EmailComposer) {
        eventsService.onNewImageAdded.subscribe((img) => {
            if (img != null) {
                console.log('cought ', img);
                this.appImages[this.appImages.length] = img;
            }
        });
        console.log('album constructor');
    }

    ngOnInit() {
        console.log('album init');
    }

    sendMail(img: AppImage) {
        this.emailComposer.isAvailable().then((available: boolean) => {
            if (available) {
                print();
            }
        });
        const email = {
            to: 'camille.guinaudeau@u-psud.fr',
            cc: 'camille.guinaudeau@universite-paris-saclay.fr',
            bcc: ['guinaudeau@limsi.fr', 'camille.guinaudeau@limsi.fr'],
            attachments: [img.emailAttachment],
            subject: img.description,
            body: 'Longitude: ' + img.getLng() + ' Latitude: ' + img.getLat(),
            isHtml: false
        };
        this.emailComposer.open(email);
        console.log('email opened');
    }
}
