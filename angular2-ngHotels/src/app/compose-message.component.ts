import { Component, HostBinding } from '@angular/core';
import { Router }                 from '@angular/router';

import { slideInDownAnimation }   from './animations';

@Component({
  templateUrl: 'compose-message.component.html',
  host: { 'class': 'contact' },
  styles: [ 
    `:host { 
      position: relative; 
      bottom: 10%; 
      display: block;
      position: fixed;
      opacity: 1;
      transform: translateX(0px);
      left: 10px;
      background: rgba(0, 0, 0, 0.43);
      padding: 20px;
      border-radius: 8px;
    }
    h3{color: #fff}
  `],
  animations: [ slideInDownAnimation ]
})
export class ComposeMessageComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'fixed';

  details: string;
  sending: boolean = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/