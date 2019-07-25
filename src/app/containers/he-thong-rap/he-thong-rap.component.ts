import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim-service.service';

@Component({
  selector: 'app-he-thong-rap',
  templateUrl: './he-thong-rap.component.html',
  styleUrls: ['./he-thong-rap.component.scss']
})
export class HeThongRapComponent implements OnInit {
  @Input() chosenDate;
  @Input() maPhim: number;
  @Input() heThongRapChieu;

  danhSachHeThongRap = [];
  dsRapAvailable = [];
  cumRapChieu: any;

  constructor(
    private phimService: PhimService
  ) { }

  ngOnChanges() {
    this.getHeThongRap();
  }

  ngOnInit() {
  }

  getHeThongRap() {
    const url = 'QuanLyRap/LayThongTinHeThongRap';
    this.phimService.getAPI(url).subscribe((data: any) => {
      this.danhSachHeThongRap = data;
      this.showHeThongRapChieu();
    })
  }
  showHeThongRapChieu() {
    this.dsRapAvailable = [];
    this.danhSachHeThongRap.forEach(item => {
      if (this.heThongRapChieu !== undefined) {
        let index = this.heThongRapChieu.findIndex(ht => ht.maHeThongRap === item.maHeThongRap);
        if (index !== -1) {
          this.dsRapAvailable.push(item);
        }
      }
    })
  }

}
