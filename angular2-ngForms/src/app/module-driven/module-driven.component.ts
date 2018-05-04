import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {validateDuration} from './validateDuration';

@Component({
  selector: 'app-module-driven',
  templateUrl: './module-driven.component.html',
  styleUrls: ['./module-driven.component.css']
})
export class ModuleDrivenComponent implements OnInit {

  myForm: FormGroup;

  // INSERISCO UN SINGOLO FormControl 
  // e non sull'intero FORM
  duration = new FormControl('',
      [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]);

  // AGGIUNGO IL CAMPO CUSTOM VALIDATE DURATION
  durationCustom = new FormControl('',[validateDuration]);

  // ISTANZIO I MIEI CAMPI DI VALIDAZIONE DENTRO IL CONSTRUCTOR
  constructor() { 
    this.myForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      // collego il controllo al FORM CONTROL SOPRA
      duration: this.duration,

      // collego il controllo al FORM CONTROL SOPRA
      durationCustom: this.durationCustom,
      description: new FormControl("",[
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

}
