import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
import { ChiTietPhimRoutingModule } from './chi-tiet-phim-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ShareModuleModule } from 'src/app/_core/shared/share-module/share-module.module';
import { HeThongRapModule } from 'src/app/containers/he-thong-rap/he-thong-rap.module';

@NgModule({
  declarations: [ChiTietPhimComponent],
  imports: [
    CommonModule,
    ChiTietPhimRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ShareModuleModule,
    HeThongRapModule
  ]
})
export class ChiTietPhimModule { }
