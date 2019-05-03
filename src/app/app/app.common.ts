import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { appRoutes } from './app.routes';
import { SharedModule } from 'app/shared';
import { HomeModule } from 'app/main/home/home.module';

export const DECLARATIONS: any[] = [
    AppComponent
];
export const IMPORTS: any[] = [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    TranslateModule.forRoot(),
    // Material moment date module
    MatMomentDateModule,
    // Material
    MatButtonModule,
    MatIconModule,
    // Fuse modules
    FuseModule.forRoot(fuseConfig),
    FuseProgressBarModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
    // App modules
    LayoutModule,
    HomeModule,
    SharedModule
]
export const BOOTSTRAPS: any[] = [
    AppComponent
]
