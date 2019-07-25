import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim-service.service';

@Component({
  selector: 'app-cum-rap',
  templateUrl: './cum-rap.component.html',
  styleUrls: ['./cum-rap.component.scss']
})
export class CumRapComponent implements OnInit {
  @Input() chosenDate;
  @Input() maPhim;
  @Input() maHeThongRap;

  danhSachCumRap = [];
  dsMaCumRap = [];
  dsCumRapTheoHeThong = [];

  constructor(
    private phimService: PhimService
  ) { }


  ngOnChanges() {
    // this.showCumRap();
    this.layLichChieuPhimAPI();
  }

  ngOnInit() {
  }

  layLichChieuPhimAPI() {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.phimService.getAPI(url).subscribe((data: any) => {
      this.layThongTinCumRap(data.lichChieu);
      this.layDanhSachCumRapAPI();
    })
  }

  layDanhSachCumRapAPI() {
    const url = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.maHeThongRap}`;
    this.phimService.getAPI(url).subscribe((data: any) => {
      this.dsCumRapTheoHeThong = data;
      this.showCumRap();
    })
  }

  layThongTinCumRap(lichChieu: any) {
    //chuyển định dạng date được chọn
    let dateLuaChon = this.chosenDate.toISOString().slice(0, 19).replace(/-/g, "-").replace("T", " ").slice(0, 10);
    lichChieu.map(item => {
      let date = item.ngayChieuGioChieu.slice(0, 10);
      let maHTRap = item.thongTinRap.maHeThongRap;

      // nếu trùng ngày chiếu và trùng mã hệ thống rạp
      if (date === dateLuaChon && maHTRap === this.maHeThongRap) {
        // nếu mảng rỗng
        if (this.dsMaCumRap.length === 0) {
          this.dsMaCumRap.push(item.thongTinRap.maCumRap);
        }
        else {
          this.dsMaCumRap.forEach(ma => {
            if (ma !== item.thongTinRap.maCumRap) {
              this.dsMaCumRap.push(item.thongTinRap.maCumRap);
            }
          })
        }
      }

    })
  }

  showCumRap() {
    this.danhSachCumRap = [];
    this.dsMaCumRap.forEach(ma => {
      this.dsCumRapTheoHeThong.forEach(item => {
        if (ma === item.maCumRap) {
          let obj = {
            maCumRap: item.maCumRap,
            tenCumRap: item.tenCumRap,
            diaChi: item.diaChi,
            lichChieu: []
          }
          this.danhSachCumRap.push(obj);
        }
      })
    })
  }
}
