import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  statusDropdown = false;

  constructor() { }

  ngOnInit() {
  }

  showHideMenuDropdown = () => {
    this.statusDropdown = !this.statusDropdown;
    console.log(this.statusDropdown);
  }

}
