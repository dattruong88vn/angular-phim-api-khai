import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim-service.service';
import { ShareStoreService } from 'src/app/_core/shared/ShareStore/share-store.service';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  paramFromLink = ''; //lưu params từ link
  maPhimFromLink = ''; // lấy mã phim để get API chi tiết phim

  // Obj để lưu chi tiết phim
  phimDetail = {
    ngayKhoiChieu: '',
    tenPhim: '',
    maPhim: 0,
    danhGia: 0,
    hinhAnh: '',
    moTa: '',
    trailer: '',
    heThongRapChieu: [
      {
        cumRapChieu: [
            {
              lichChieuPhim: [
                { 
                  thoiLuong: 0 
                }
              ]
            }
          ]
      }
    ]
  };

  isShowRating = true; // show icon rating hay ko?

  rating = 0;  // đánh giá quy ra %

  arrStar = [];  // mảng để show số lượng sao nguyên
  halfStar = false;  // show sao 1/2

  // Arr chứa 7 ngày để hiển thị ra màn hình
  arrDate = [];

  // Ngày được chọn để truyền xuống Component HeThongPhim, mặc định là ngày hôm nay
  chosenDate = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private phimService: PhimService,
    private shareStoreService: ShareStoreService,
  ) { }


  ngOnInit() {
    this.getParamsFromLink();
    this.getIdFromParam(this.paramFromLink);
    this.getThongTinLichChieuPhim(this.maPhimFromLink);
    this.getPhimDetail(this.maPhimFromLink);
    this.getNext7Date();
  }

  getParamsFromLink = () => {
    this.paramFromLink = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getIdFromParam = (param: string) => {
    let index = param.indexOf('-');
    this.maPhimFromLink = param.slice(0, index);
  }

  getPhimDetail = (ma) => {
    const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${ma}`;
    this.phimService.getAPI(url).subscribe((data) => {
      this.phimDetail = data;
      this.rating = this.phimDetail.danhGia * 100 / 5;
      this.showStarRating();
    })
  }

  showStarRating = () => {
    this.arrStar = Array(Math.floor(this.phimDetail.danhGia / 1));
    if (this.phimDetail.danhGia % 1 === 0) {
      this.halfStar = false;
    }
    else {
      this.halfStar = true;
    }

    // this.arrHalfStar = Array(Math.ceil(this.phimDetail.danhGia % 1))
  }

  xemTrailer() {
    this.shareStoreService.sharingChiTietPhim(this.phimDetail);
  }

  getThongTinLichChieuPhim = (ma) => {
    const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${ma}`;
    this.phimService.getAPI(url).subscribe((data) => {
      // console.log(data);
    })
  }

  getDayName(day) {
    switch (day.getDay()) {
      case 1: {
        return 'Thứ hai';
      }
      case 2: {
        return 'Thứ ba';
      }
      case 3: {
        return 'Thứ tư';
      }
      case 4: {
        return 'Thứ năm';
      }
      case 5: {
        return 'Thứ sáu';
      }
      case 6: {
        return 'Thứ bảy';
      }
      case 0: {
        return 'Chủ nhật';
      }
    }
  }

  getNext7Date = () => {
    let today = new Date();
    this.arrDate.push({fullDate: today, ngay: today.getDate(), thu: this.getDayName(today), status: true });

    for (let i = 1; i < 7; i++) {
      /*
        B1: let today = new Date()               : lấy ngày tháng hiện tại
        B2: today.getDate()                      : trả về ngày hiện tại trong tháng (ví dụ hôm nay là ngày 18/7/2019 --> 18)
        B3: today.getDate() + i                  : cộng thêm số ngày tiếp theo vào ngày hiện tại (ví dụ: 18 + 22 = 40  --> 40 ngày sau ngày hiện tại
        B4: today.setDate(today.getDate() + i)   : gán lại [ngày tháng của (ngày sau ngày hôm nay 40 ngày)] vào biến today
      */
      let day = new Date();
      day.setDate(day.getDate() + i);
      let day_name = '';

      let obj = {
        fullDate: day,
        ngay: day.getDate(),
        thu: this.getDayName(day),
        status: false
      }
      this.arrDate.push(obj);
    }

  }

  selectDay(date) {
    let index = this.arrDate.findIndex(item => item.ngay === date.ngay);
    this.arrDate.forEach(item => {
      item.status = false;
    })
    this.arrDate[index].status = true;
    this.chosenDate = date.fullDate;
  }

}
