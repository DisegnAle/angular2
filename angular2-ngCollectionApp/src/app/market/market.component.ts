import { Component, OnInit } from '@angular/core';
import {CollectableService} from '../shared/collectable.service'
import {Collectable} from '../shared/collectable.model'

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  // creo una proprieta collectables di tipo array Collectable che trovo nel model
  // per poterla trovare devo importarlo su
  collectables: Collectable[] = [];

  // anche qui indico che il mio item passato al click è di tipo collectable
  onAddToCollection(pippo: Collectable){
    this.collectableService.addToCollection(pippo);
  }

  constructor(private collectableService: CollectableService) {}


  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}



