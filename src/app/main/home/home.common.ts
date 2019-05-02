import { HomeComponent } from "./components";
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { routes } from './home.routes';

export const DECLARATIONS: any[] = [
    HomeComponent
];
export const IMPORTS: any[] = [
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule
]
export const EXPORTS: any[] = [
    HomeComponent
]
