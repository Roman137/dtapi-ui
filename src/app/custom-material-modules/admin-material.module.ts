import {NgModule} from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdToolbarModule, MdIconModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdToolbarModule, MdIconModule]
})
export class AdminMaterialModule {}
