import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css']
})
export class FormExerciseComponent implements OnInit {

  myForm: FormGroup;

  // INSERISCO UN SINGOLO FormControl 
  // e non sull'intero FORM
  duration = new FormControl('',
      [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]);


  // ISTANZIO I MIEI CAMPI DI VALIDAZIONE DENTRO IL CONSTRUCTOR
  constructor() { 
    this.myForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      // collego il controllo al FORM CONTROL SOPRA
      duration: this.duration,

      description: new FormControl("",[
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

}

