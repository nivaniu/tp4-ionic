import { Component } from '@angular/core';
import {Camera} from '@ionic-native/camera/ngx';
import {Router} from '@angular/router';
import {toTitleCase} from 'codelyzer/util/utils';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private name: string;

  constructor(private camera: Camera, private router: Router) {
    const urls: string[] = router.url.split('/');
    this.name =  toTitleCase(urls[urls.length - 1]);
  }
}
