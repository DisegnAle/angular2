import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSummaryComponent } from './hero-summary.component';
import { HeroSummaryFormComponent } from './hero-summary-form.component';
import { HeroPaymentFormComponent } from './hero-payment-form.component';
import { ReadMoreComponent } from './read-more.component'

import { HeroService } from './hero.service';

import { HeroRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '@angular/material';

import { SearchPipe } from './pipes/search.pipe'
import { TruncatePipe } from './pipes/truncate.pipe';
import { OrderBy } from './pipes/orderby.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    MaterialModule.forRoot(),
    HttpModule
    
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSummaryComponent,
    HeroSummaryFormComponent,
    HeroPaymentFormComponent,
    ReadMoreComponent,
    SearchPipe,
    TruncatePipe,
    OrderBy
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/