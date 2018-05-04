import {CoursesComponent} from './courses/courses.component'
import {CourseDetail} from './courses/CourseDetail'
import {CanCourseDetailDeactivate} from './courses/course-detail-deactivate.guard'

export const coursesRouterConfig = [
   {  
     path: 'courses',
     children: [
         {
             path: '',
             component: CoursesComponent
         },
         {
            path: ':id',
            component: CourseDetail,
            CanDeactivate: [CanCourseDetailDeactivate]
         }
     ]
 } 
]