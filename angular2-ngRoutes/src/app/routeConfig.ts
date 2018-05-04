import {Routes, Route} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {LessonsComponent} from './lessons/lessons.component'
import {coursesRouterConfig} from './courses-router-config'

const indexRoute:Route = {
    path: '',
    component: HomeComponent
};

const fallbackRoute:Route = {
    path: '**',
    component: HomeComponent
};

export const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, 
  ...coursesRouterConfig,
  {
    path: 'lessons',
    component: LessonsComponent
  },
  indexRoute,
  fallbackRoute
];