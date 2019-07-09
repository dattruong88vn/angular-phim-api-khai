import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareStoreService {

  chiTietPhim = new BehaviorSubject({} as Object);
  shareChiTietPhim = this.chiTietPhim.asObservable();

  constructor() { }

  sharingChiTietPhim(phim) {
    this.chiTietPhim.next(phim);
  }
}
