import {Component, Input} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
    selector:'courses-list',
    template: `
            <table class="courses-list card card-strong">
                <tr class="course-summary" *ngFor="let course of courses" 
                    (click)="showCoursePlayList(course)">
                    <td>
                        <img class="lesson-logo" 
                        src="https://material.angularjs.org/latest/img/icons/angular-logo.svg">  
                    </td>
                    <td class="description">
                        {{course.description}}    
                    </td>
                    <td>
                       <!-- POSSO BUTTARE IL LINK NEL TEMPLATE IN  QUESTO MODO        
                       <button [routerLink]="course.id">View</button>                      
                       -->

                      <!-- OPPURE LO POSSO FARE IN MANIERA PROGRAMMATICA -->
                       <button (click)="openCourse(course)">View</button>   
                    </td>
                </tr>
           </table>
           
           <router-outlet name="chat"></router-outlet>
        `
})
export class CoursesList {


    @Input()
    courses = [];


    constructor(private router:Router, private route: ActivatedRoute) {

    }


    openCourse(course) {
  
        // this.router.navigateByUrl(`/courses/${course.id}`);
        // oppure così - inserisco nell'array i percorsi per arrivare all'item
        // this.router.navigate(['courses', course.id]);

        // per avere un percorso relativo e non assoluto
        this.router.navigate(['courses', course.id], {
                queryParams:{
                    description: course.description
                }
            });
    }

    showCoursePlayList(course) {

        /* this.router.navigateByUrl(
            `/courses(playlist:playlist;description=${course.description})`
        ); */
 
    }

    

}






