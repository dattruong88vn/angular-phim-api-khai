import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeThongRapComponent } from './he-thong-rap.component';
import { CumRapModule } from '../cum-rap/cum-rap.module';

@NgModule({
  declarations: [HeThongRapComponent],
  exports: [HeThongRapComponent],
  imports: [
    CommonModule,
    CumRapModule
  ]
})
export class HeThongRapModule { }
