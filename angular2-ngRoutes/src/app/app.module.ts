import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { LessonsComponent } from './lessons/lessons.component';
import { routeConfig } from './routeConfig';
import { CoursesList } from './courses/courses-list.component'
import { CourseDetail } from './courses/CourseDetail'
import { CanCourseDetailDeactivate } from './courses/course-detail-deactivate.guard'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    LessonsComponent,
    CoursesList,
    CourseDetail,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [CanCourseDetailDeactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
