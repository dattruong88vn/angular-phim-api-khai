import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  danhSachDoiTac = [
    {id: 'bhd', link:'https://www.bhdstar.vn/', img:'./../../assets/img/icon/bhd.png'},
    {id: 'galaxy', link:'https://www.galaxycine.vn/', img:'./../../assets/img/icon/galaxycine.png'},
    {id: 'cinestar', link:'https://cinestar.com.vn/', img:'./../../assets/img/icon/cinestar.png'},
    {id: 'lottecinema', link:'http://lottecinemavn.com/LCHS/index.aspx', img:'./../../assets/img/icon/lottecinema.png'},
    {id: 'megags', link:'https://www.megagscinemas.vn/', img:'./../../assets/img/icon/megags.png'},
    {id: 'beta', link:'https://www.betacineplex.vn/home.htm', img:'./../../assets/img/icon/bt.jpg'},
    {id: 'dongdacinema', link:'http://ddcinema.vn/', img:'./../../assets/img/icon/dongdacinema.png'},
    {id: 'touch', link:'https://touchcinema.com/', img:'./../../assets/img/icon/TOUCH.png'},
    {id: 'cinemax', link:'https://cinemaxvn.com/', img:'./../../assets/img/icon/cnx.jpg'},
    {id: 'starlight', link:'http://starlight.vn/', img:'./../../assets/img/icon/STARLIGHT.png'},
    {id: 'momo', link:'https://momo.vn/', img:'./../../assets/img/icon/momo.png'},
    {id: 'zalopay', link:'https://zalopay.vn/', img:'./../../assets/img/icon/zalopay_icon.png'},
    {id: 'payoo', link:'https://www.payoo.vn/', img:'./../../assets/img/icon/payoo.jpg'},
    {id: 'vietcombank', link:'https://www.vietcombank.com.vn/', img:'./../../assets/img/icon/VCB.png'},
    {id: 'agribank', link:'http://www.agribank.com.vn/default.aspx', img:'./../../assets/img/icon/AGRIBANK.png'},
    {id: 'vietinbank', link:'https://www.vietinbank.vn/web/home/vn/index.html', img:'./../../assets/img/icon/VIETTINBANK.png'},
    {id: 'ivb', link:'https://www.indovinabank.com.vn/', img:'./../../assets/img/icon/IVB.png'},
    {id: '123go', link:'http://123go.vn/', img:'./../../assets/img/icon/123go.png'},
    {id: 'laban', link:'https://laban.vn/', img:'./../../assets/img/icon/laban.png'},
  ];

  statusDropdown = false;

  constructor() { }

  ngOnInit() {
  }

  showHideMenuDropdown = () => {
    this.statusDropdown = !this.statusDropdown;
    console.log(this.statusDropdown);
  }

}
