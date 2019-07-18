import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CumRapComponent } from './cum-rap.component';
import { ItemRapMobileComponent } from 'src/app/components/item-rap-mobile/item-rap-mobile.component';
import { RapModule } from '../rap/rap.module';

@NgModule({
  declarations: [CumRapComponent],
  exports: [CumRapComponent],
  imports: [
    CommonModule,
    RapModule
  ]
})
export class CumRapModule { }
