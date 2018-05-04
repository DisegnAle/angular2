import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges {
  photo= 'http://wallup.net/wp-content/uploads/2016/01/178625-nature-sea-Bora_Bora.jpg'
  myForm: FormGroup;


  // ISTANZIO I MIEI CAMPI DI VALIDAZIONE DENTRO IL CONSTRUCTOR
  constructor() { 
    this.myForm = new FormGroup({
      destination: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z]+')
      ]),
      
      arrival: new FormControl('',[
          Validators.required
          //Validators.pattern('/^\d{1,2}\.\d{1,2}\.\d{4}$/')
      ]),
      departure: new FormControl('',[
          Validators.required,
          //Validators.pattern('/^\d{1,2}\.\d{1,2}\.\d{4}$/')
      ]),

    });
  }

  reset(){
    this.myForm.reset();
  }

  callType(value){
    console.log(value);
    return value;
  }
  changeRoom(value){
    console.log(value);
    return value;
  }
 
 // DA COMPLETARE - NUMERO DI STANZE IN BASE AL VALORE 
 // SCELTO NELLA SELECT 
 // PER IL MOMENTO VALORE IMPOSTATO UGUALE A 1
  rooms = [
    {value: '1'}
  ];

  children = [
    {value: '1'}
  ];

  selectedRoom = 1;
  
  

  ngOnChanges(changes: SimpleChanges){
    this.callType;
    this.changeRoom;
    console.log(this.changeRoom);
  }



}

