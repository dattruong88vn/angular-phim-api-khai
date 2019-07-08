import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DanhSachPhimModule } from '../danh-sach-phim/danh-sach-phim.module';

@NgModule({
  declarations: [TrangChuComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    CarouselModule.forRoot(),
    DanhSachPhimModule,
  ]
})
export class TrangChuModule { }
