import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPhimComponent } from './item-phim.component';

@NgModule({
  declarations: [ItemPhimComponent],
  exports:[ItemPhimComponent],
  imports: [
    CommonModule
  ]
})
export class ItemPhimModule { }
