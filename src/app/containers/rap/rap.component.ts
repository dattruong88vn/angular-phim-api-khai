import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim-service.service';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.component.html',
  styleUrls: ['./rap.component.scss']
})
export class RapComponent implements OnInit {
  @Input() cumRap;
  @Input() chosenDate;
  @Input() maPhim;
  
  dsSuatChieu = [];

  constructor(
    private phimService: PhimService
  ) { }

  ngOnChanges() {
    this.layLichChieuPhim();
  }

  ngOnInit() {
    
  }

  layLichChieuPhim() {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.phimService.getAPI(url).subscribe((data: any) => {
      this.layLichChieuCumRap(data.lichChieu);
      console.log(data.lichChieu);
    })
  }

  layLichChieuCumRap(lichChieu) {
    let dateLuaChon = this.chosenDate.toISOString().slice(0, 19).replace(/-/g, "-").replace("T", " ").slice(0, 10);
    this.dsSuatChieu = [];
    lichChieu.map(item => {
      let date = item.ngayChieuGioChieu.slice(0, 10);
      if (dateLuaChon === date && this.cumRap.maCumRap === item.thongTinRap.maCumRap) {
        let suatChieu = item.ngayChieuGioChieu.slice(11, 16);
        this.dsSuatChieu.push(suatChieu);
      }
    })
    console.log(this.dsSuatChieu);
  }

}
