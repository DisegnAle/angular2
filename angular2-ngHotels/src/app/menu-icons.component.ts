import {Component} from '@angular/core';


@Component({
  selector: 'menu-icons',
  templateUrl: `
      <button md-icon-button [mdMenuTriggerFor]="menu">
          <md-icon>more_vert</md-icon>
     </button>
        <md-menu #menu="mdMenu">
          <button md-menu-item>
            <md-icon>dialpad</md-icon>
            <span>Redial</span>
          </button>
          <button md-menu-item disabled>
            <md-icon>voicemail</md-icon>
            <span>Check voicemail</span>
          </button>
          <button md-menu-item>
            <md-icon>notifications_off</md-icon>
            <span>Disable alerts</span>
          </button>
        </md-menu>
  `,
})
export class MenuIconsComponent {}