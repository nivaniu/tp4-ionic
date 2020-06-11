import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {AppImage} from '../../classes/AppImage/app-image';
import {EventService} from '../../services/events/event.service';
import {Page} from '../../enums/pages/page.enum';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
    appImages: AppImage[] = [];
    @Input() rawPage: string;
    Page = Page;

    constructor(private eventsService: EventService) {
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

}
