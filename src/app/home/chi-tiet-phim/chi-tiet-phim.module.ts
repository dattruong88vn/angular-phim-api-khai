import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
import { ChiTietPhimRoutingModule } from './chi-tiet-phim-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [ChiTietPhimComponent],
  imports: [
    CommonModule,
    ChiTietPhimRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ]
})
export class ChiTietPhimModule { }
