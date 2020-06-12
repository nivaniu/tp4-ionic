import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NavPath} from '../classes/NavPath/nav-path';
import {Page} from '../enums/pages/page.enum';
import {AppImage} from '../classes/AppImage/app-image';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    private name: string;
    private rawName: string;
    private navPath: NavPath;
    private Page = Page;
    private appImages: AppImage[] = [];

    constructor(private router: Router) {
        this.navPath = new NavPath(router.url.split('/'));
        this.name = this.navPath.getLastPageName();
        this.rawName = this.navPath.getRawLastPageName();
    }

    imageAdded(img: AppImage) {
        this.appImages[this.appImages.length] = img;
    }
}
