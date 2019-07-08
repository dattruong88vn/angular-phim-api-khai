import { Component, OnInit } from '@angular/core';
import { PhimService } from './../../_core/services/phim-service.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

  danhSachPhim: any[] = [
    {}
  ]

  constructor(private phimService: PhimService) { }

  ngOnInit() {
    this.getListPhimfromAPI();
  }

  getListPhimfromAPI = () => {
    const url = 'QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    this.phimService.getAPI(url).subscribe((data) => {
      this.danhSachPhim = data;
      console.log(this.danhSachPhim);
    })
  }
}
