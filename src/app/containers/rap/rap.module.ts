import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapComponent } from './rap.component';

@NgModule({
  declarations: [RapComponent],
  exports: [RapComponent],
  imports: [
    CommonModule
  ]
})
export class RapModule { }
