import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafe-list/cafe-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CafeListComponent],
  declarations: [CafeListComponent]
})
export class CafeModule { }
