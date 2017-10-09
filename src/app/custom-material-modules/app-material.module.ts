import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatIconModule]
})
export class AppMaterialModule {}
