import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';



import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModuleDrivenComponent } from './module-driven/module-driven.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ModuleDrivenComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path: 'temDriven',
      component: TemplateDrivenComponent
    },{
      path: 'modDriven',
      component: ModuleDrivenComponent
    },{
      path: 'formBuilder',
      component: FormBuilderComponent
    },{
      path: '',
      redirectTo: 'temDriven',
      pathMatch: 'full'
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
