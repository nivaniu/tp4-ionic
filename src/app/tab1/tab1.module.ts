import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {PhotoComponent} from '../components/photo/photo.component';
import {AlbumComponent} from '../components/album/album.component';
import {LocalisationComponent} from '../components/localisation/localisation.component';
import {SuperLocalisationComponent} from '../components/super-localisation/super-localisation.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        LocalisationComponent
    ],
    declarations: [Tab1Page, PhotoComponent, AlbumComponent, LocalisationComponent, SuperLocalisationComponent]
})
export class Tab1PageModule {}
