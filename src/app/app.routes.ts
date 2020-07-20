import {RouterModule,Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';

const APP_ROUTES: Routes = [
    { path: 'header', component: HeaderComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'header'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);