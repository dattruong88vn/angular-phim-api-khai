import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTrailerComponent } from 'src/app/components/modal-trailer/modal-trailer.component';
import { YoutubePipe } from './../../../_pipe/youtube.pipe';

@NgModule({
  declarations: [ModalTrailerComponent, YoutubePipe],
  exports: [ModalTrailerComponent],
  imports: [
    CommonModule,
    
  ]
})
export class ShareModuleModule { }
