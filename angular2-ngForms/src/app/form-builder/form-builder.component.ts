import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {Observable} from 'rxjs';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent implements OnInit {

  myForm: FormGroup;
  // INGETTO IL FORMBUILDER NEL CONSTRUCTOR 
  // UTILIZZO fb.group per la parte fuori 
  // Le validazioni vengono fatte in questo modo
  constructor(fb:FormBuilder) { 
    this.myForm = fb.group({
      title: ['This is the title', [
        Validators.required,
        Validators.minLength(5)
      ]],
      duration: [10,
      [
        Validators.required,
        Validators.pattern('[0-9]+')
      ]],
      description: ["Description goes here",[Validators.required]]
    });

    // this.myForm.valueChanges.do(data=>console.log(data));
  }

  ngOnInit() {
  }

}

