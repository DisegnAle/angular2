import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding,  ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { slideInDownAnimation } from '../animations';
import { Hero, HeroService }  from './hero.service';

declare var jQuery: any



@Component({
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero: Hero;
  heroes: Observable<Hero[]>;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}


  ngAfterViewInit() {
      jQuery(document).ready(function(){ //Photos Gallery
           jQuery(".fancybox").fancybox({
               openEffect: "elastic",
               closeEffect: "none"
           });
       });
    }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getHero(+params['id']))
      .subscribe((hero: Hero) => this.hero = hero);


      this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHeroes();
      });
  }

  onSelectRoom(hero: Hero) {
    this.router.navigate(['/summary', hero.id]);
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
  

 

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/