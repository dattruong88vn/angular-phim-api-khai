import { Component, OnInit } from '@angular/core';
import { PhimService } from './../../_core/services/phim-service.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim = [];
  mangCarousel = [];

  constructor(private phimService: PhimService) { }

  ngOnInit() {
    this.getListPhimfromAPI();
  }

  getListPhimfromAPI = () => {
    const url = 'QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    this.phimService.getAPI(url).subscribe((data) => {
      this.danhSachPhim = data;
      this.getCarousel();
    })
  }

  getCarousel() {
    let soluong = 0;
    let count = 0;
    this.danhSachPhim.forEach((item) => {
      if (soluong < this.danhSachPhim.length - 1) {
        this.mangCarousel[count] = this.danhSachPhim.slice(soluong, soluong + 4);
        soluong += 4;
        count += 1;
      }
    })
    console.log(this.mangCarousel);
  }

}
