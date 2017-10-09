import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule]
})
export class LoginMaterialModule {}
