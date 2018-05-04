import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <div class="container flexbox">
      <div style="width:50px" class="myLogo">
        <img src="/assets/images/logo.png" alt="">
      </div>
      <nav>
        <a routerLink="/search" routerLinkActive="active">Search</a>
        <a routerLink="/heroes" routerLinkActive="active">Hotels list</a>
        <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
      </nav>
      
    </div> 
  </div>  
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/