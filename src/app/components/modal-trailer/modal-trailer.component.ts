import { Component, OnInit } from '@angular/core';
import { ShareStoreService } from './../../_core/shared/ShareStore/share-store.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  phimFromShareStore = {};
  linkTrailer = '';

  constructor(private shareStore: ShareStoreService) { }

  ngOnInit() {
    this.shareStore.shareChiTietPhim.subscribe((phim: any) => {
      this.phimFromShareStore = phim;
      this.checkData(phim.Trailer);
    })
  }

  checkData(data: string): boolean {
    if (data === undefined) {
      return false;
    }
    else {
      this.linkTrailer = 'https://www.youtube.com/embed/' + data.slice(32);
      return true;
    }
  }

  stopTrailer() {
    this.linkTrailer = '';
  }

}
