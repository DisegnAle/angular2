import { RACES } from './mocks';
import { Injectable } from '@angular/core';
import { Race } from './race';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  constructor(private http: Http){}

  getRaces() {
    return this.http.get('app/races.json')
    .map(response => <Race[]>response.json().racesData);
  }
}
