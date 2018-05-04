import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
    .selected{background-color: #eee;color: white;}
    `
  ]
})
export class HeaderComponent implements OnInit {


  ngOnInit() {
  }

}
