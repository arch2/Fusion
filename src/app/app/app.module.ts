import { NgModule } from '@angular/core';
import 'hammerjs';
import { DECLARATIONS, IMPORTS, BOOTSTRAPS } from './app.common';

@NgModule({
    declarations: [
        ...DECLARATIONS
    ],
    imports     : [
        ...IMPORTS
    ],
    bootstrap   : [
        ...BOOTSTRAPS
    ]
})
export class AppModule
{
}
