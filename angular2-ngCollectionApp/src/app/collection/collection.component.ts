import { Component, OnInit } from '@angular/core';
import {Collectable} from '../shared/collectable.model';
import {CollectableService} from '../shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {

  collectedItems: Collectable[] = [];
  
  constructor(private collectableService:CollectableService) { }

  onRemoveFromCollection(pippo: Collectable){
    this.collectableService.removeFromCollection(pippo);
  }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }

}
