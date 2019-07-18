import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { ItemPhimModule } from 'src/app/containers/item-phim/item-phim.module';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';

@NgModule({
  declarations: [DanhSachPhimComponent],
  exports: [DanhSachPhimComponent],
  imports: [
    CommonModule,
    ItemPhimModule,
    DanhSachPhimRoutingModule
  ]
})
export class DanhSachPhimModule { }
