import { Component, OnInit, Input } from '@angular/core';
import { ShareStoreService } from './../../_core/shared/ShareStore/share-store.service';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;

  constructor(private shareStore: ShareStoreService) { }

  ngOnInit() {
  }

  xemTrailer = (phim) => {
    this.shareStore.sharingChiTietPhim(phim);
  } 
}
