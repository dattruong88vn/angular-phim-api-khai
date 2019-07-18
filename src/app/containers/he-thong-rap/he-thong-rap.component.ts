import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim-service.service';

@Component({
  selector: 'app-he-thong-rap',
  templateUrl: './he-thong-rap.component.html',
  styleUrls: ['./he-thong-rap.component.scss']
})
export class HeThongRapComponent implements OnInit {
  @Input() chosenDate;
  @Input() maPhim;

  danhSachHeThongRap = [];

  constructor(
    private phimService: PhimService
  ) { }

  ngOnInit() {
    this.getHeThongRap();
  }

  getHeThongRap() {
    const url = 'QuanLyRap/LayThongTinHeThongRap';
    this.phimService.getAPI(url).subscribe((data: any) => {
      this.danhSachHeThongRap = data;
    })
  }

}
