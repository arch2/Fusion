import { NgModule } from '@angular/core';
import { IMPORTS, DECLARATIONS, EXPORTS } from './users.common';

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...IMPORTS
  ],
  exports: [
    ...EXPORTS
  ]
})
export class UsersModule { }
