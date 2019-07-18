import { Component, OnInit } from '@angular/core';
import { ShareStoreService } from 'src/app/_core/shared/ShareStore/share-store.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  trailerLink = '';
  status = false;

  constructor(private shareStore: ShareStoreService) { }

  ngOnInit() {
    this.shareStore.shareChiTietPhim.subscribe((phim: any) => {
      this.status = this.loadingTrailer(phim.trailer);
    })
  }

  stopTrailer() {
    this.trailerLink = '';
  }

  loadingTrailer(trailer: string): boolean {
    if (trailer === undefined) {
      return false;
    }
    else {
      this.trailerLink = trailer;
      return true;
    }
  }

}
