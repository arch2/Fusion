import { UsersComponent } from "./components";
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CommonModule } from '@angular/common';
import { routes } from './users.routes';

export const DECLARATIONS: any[] = [
    UsersComponent
];
export const IMPORTS: any[] = [
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule,
    CommonModule
]
export const EXPORTS: any[] = [
    UsersComponent
]
