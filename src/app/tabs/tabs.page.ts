import { Component } from '@angular/core';
import {Page} from '../enums/pages/page.enum';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
private Page = Page;
  constructor() {}

}
