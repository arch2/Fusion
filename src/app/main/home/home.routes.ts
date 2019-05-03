import { HomeComponent } from './components';
import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path          : 'home',
        component     : HomeComponent
    },
    {
        path             : 'sample',
        loadChildren     : '../sample/sample.module#SampleModule'
    },
    {
        path             : 'users',
        loadChildren     : '../users/users.module#UsersModule'
    }
];