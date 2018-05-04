import { Injectable } from '@angular/core';
import {Collectable} from './collectable.model';

@Injectable()
export class CollectableService {

  private collectables: Collectable[] = [
    {description: 'A very rare copy of Jquery for dummies', type: "Book"},
    {description: 'The first letter ever written', type: "Piece of paper"},
    {description: 'A photograph showing nothing', type: "Photo"},
    {description: 'A box with all sold Zunes', type: "Garbage"}
  ];

  private collection: Collectable[] = [];

  getCollectables(){
    return this.collectables;
  }

  getCollection(){
    return this.collection;
  }

  addToCollection(pippo: Collectable){
    if(this.collection.indexOf(pippo) !== -1){
      return;
    }else{
      this.collection.push(pippo);
    }
  }

  removeFromCollection(pippo){
    this.collection.splice(this.collection.indexOf(pippo), 1);
  }

  constructor() { }

}

