import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim-service.service';

@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
  @Input() heThongRap;
  @Input() chosenDate;
  @Input() maPhim;

  danhSachCumRap = [];

  constructor(
    private phimService: PhimService
  ) { }

  ngOnInit() {
    this.layThongTinCumRap();
  }

  layThongTinCumRap() {
    const url = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.heThongRap.maHeThongRap}`;
    this.phimService.getAPI(url).subscribe((data: any) => {
      this.danhSachCumRap = data;
      console.log(this.danhSachCumRap);
    })
  }

  

}
