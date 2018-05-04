import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `

  <h2>My Forms</h2>
  <nav>
    <a routerLink="/temDriven" routerLinkActive="active">Template Driven Form</a>
    <a routerLink="/modDriven" routerLinkActive="active">Module Driven Form</a>
    <a routerLink="/formBuilder" routerLinkActive="active">Form Builder</a>
  </nav>  
  <router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
