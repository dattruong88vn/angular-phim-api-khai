import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim-service.service';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.component.html',
  styleUrls: ['./rap.component.scss']
})
export class RapComponent implements OnInit {
  @Input() rap;
  @Input() chosenDate;
  @Input() maPhim;
  
  constructor(
    private phimService: PhimService
  ) { }

  ngOnInit() {
    this.layLichChieuPhim();
  }

  layLichChieuPhim() {
    // const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1331`;
    const url = 'QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP03&tenPhim=Home&soTrang=1&soPhanTuTrenTrang=10';
    this.phimService.getAPI(url).subscribe((data: any) => {
    })
  }

}
