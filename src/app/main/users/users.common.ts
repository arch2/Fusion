import { UsersComponent } from "./components";
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { CommonModule } from '@angular/common';
import { routes } from './users.routes';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSidebarModule } from '@fuse/components';

export const DECLARATIONS: any[] = [
    UsersComponent
];
export const IMPORTS: any[] = [
    RouterModule.forChild(routes),
    TranslateModule,
    FuseSharedModule,
    FuseSidebarModule,
    
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
]
export const EXPORTS: any[] = [
    UsersComponent
]
