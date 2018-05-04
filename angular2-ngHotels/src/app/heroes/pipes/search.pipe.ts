import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'searchPipe',
})



export class SearchPipe implements PipeTransform {
  transform (heroes: any, term?:any):any{
      // check if search term is undefined
      if(term===undefined) return heroes;
      // return updated heroes array
      return heroes.filter(function(hero){
        return hero.name.toLowerCase().includes(term.toLowerCase());
      })
  }
}

