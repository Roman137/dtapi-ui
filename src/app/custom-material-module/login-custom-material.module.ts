import {NgModule} from '@angular/core';

import {MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule]
})
export class LoginCustomMaterialModule {}
