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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParamsFromLink();
  }

  getParamsFromLink = () => {
    this.idPhimFromLink = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
