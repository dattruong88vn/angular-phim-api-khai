import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {

  idPhimFromLink = '';
  tenPhimFromLink = '';
  paramFromLink = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  isShowRating = true;
  rating = 75;

  ngOnInit() {
    this.getParamsFromLink();
  }

  getParamsFromLink = () => {
    this.paramFromLink = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.paramFromLink);
  }

  getIdNameFromParam = (param) => {
  }

  // ngAfterViewInit() {
  //   let heThongRapHeight = document.getElementById("he-thong-rap-ul").style.height;
  //   let suatChieuHeight = document.getElementById("suat-chieu").style.height;
  //   if (heThongRapHeight < suatChieuHeight) {
  //     suatChieuHeight = heThongRapHeight;
  //     document.getElementById("suat-chieu").style.overflowY = 'scroll';
  //   }
  //   console.log(heThongRapHeight);
  // }
}
