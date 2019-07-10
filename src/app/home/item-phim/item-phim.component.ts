import { Component, OnInit, Input } from '@angular/core';
import { ShareStoreService } from './../../_core/shared/ShareStore/share-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;

  constructor(
    private shareStore: ShareStoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  xemTrailer = (phim) => {
    this.shareStore.sharingChiTietPhim(phim);
  }

  xemChiTietPhim = () => {
    let linkParam = this.phim.MaPhim + '-' + this.phim.TenPhim.replace(/ /g, '-');
    this.router.navigate(
      ['/phim/', linkParam])
    }
 
}
