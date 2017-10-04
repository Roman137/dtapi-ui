import {NgModule} from '@angular/core';

import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule,
  MdToolbarModule
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdToolbarModule, MdIconModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdToolbarModule, MdIconModule]
})
export class AppMaterialModule {}
