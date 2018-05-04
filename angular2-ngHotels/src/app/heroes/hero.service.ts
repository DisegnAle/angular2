import { Injectable } from '@angular/core';
import { HEROES } from './heroes-data'

export class Hero {
  constructor(
  public id: number,
  public name: string,
  public address: string,
  public stars: number,
  public location: string,
  public distance: number,
  public description: string,
  public descriptionComplete: string,
  public totalPrice: number,
  public averagePrice: number,
  public mainImage: string,
  public images: any[],
  public rooms: any[],
     /*public numResults: number,
    public status: string,
    public session: string,
    public info: any,
    public warnings: any,
    public errors: any[]*/
  
  
  ) { }

  

}



let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
  getHeroes() { return heroesPromise; }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/