import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {Page} from '../enums/pages/page.enum';
import {NavPath} from '../classes/NavPath/nav-path';

const routes: Routes = [
    {
        path: Page.TABS,
        component: TabsPage,
        children: [
            {
                path: Page.PHOTO,
                loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
            },
            {
                path: Page.ALBUM,
                loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
            },
            {
                path: Page.LOCALISATION_STANDARD,
                loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: new NavPath([Page.TABS, Page.PHOTO]).compile(),
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: new NavPath([Page.TABS, Page.PHOTO]).compile(),
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
