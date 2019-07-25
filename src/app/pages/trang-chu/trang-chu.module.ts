import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { DanhSachPhimModule } from 'src/app/containers/danh-sach-phim/danh-sach-phim.module';
import { ShareModuleModule } from 'src/app/_core/shared/share-module/share-module.module';
import { HeThongRapModule } from 'src/app/containers/he-thong-rap/he-thong-rap.module';

@NgModule({
  declarations: [TrangChuComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    DanhSachPhimModule,
    ShareModuleModule,
    HeThongRapModule
  ]
})
export class TrangChuModule { }
