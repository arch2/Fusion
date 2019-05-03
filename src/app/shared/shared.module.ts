import { NgModule } from '@angular/core';
import { IMPORTS, PROVIDERS, DECLARATIONS, EXPORTS } from './shared.common';

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...IMPORTS
  ],
  exports: [
    ...EXPORTS
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class SharedModule { }
