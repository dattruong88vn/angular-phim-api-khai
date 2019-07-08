import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ItemPhimModule } from '../item-phim/item-phim.module';
@NgModule({
  declarations: [DanhSachPhimComponent],
  exports: [DanhSachPhimComponent],
  imports: [
    CommonModule,
    ItemPhimModule
  ]
})
export class DanhSachPhimModule { }
