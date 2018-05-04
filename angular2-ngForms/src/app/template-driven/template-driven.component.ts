import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  
  user: Object = {};

  onSubmit(value:any){
    console.log(value);
  }

  summaryStatus(summary){
    return {
      // passo un oggetto il cui colore è rosso se l'intero gruppo è invalido 
      // o dirty
      color: !summary.valid && !summary.pristine ? 'red' : 'black'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
