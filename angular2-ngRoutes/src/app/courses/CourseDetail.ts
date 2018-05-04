


import {Component, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";


@Component({
    selector:'course-detail',
    template: `
        <div>
            <h2>Course id = {{courseId}}</h2>
            <p>{{description}}</p>
            <div class="nav-fields">
                <button [routerLink]="['/courses', previous()]" class="nav-button">Previous</button>
                <button [routerLink]="['/courses', next()]" class="nav-button">Next</button>              
                <input (keyup)="dirty = true" placeholder="Edit Description">            
            </div>
                
        </div>
        
`
})
export class CourseDetail implements OnDestroy {


    courseId: number;
    description:string;

    // creo queste variabili per poter generare una referenza 
    // alla registrazione di observables sotto
    // distruggo poi i dati tramite ngOnDestroy in modo che non ci siano 
    // MEMORY LEAKS e che la registrazione venga contata ogni volta che clicco su un 
    // component detail
    paramsSub: Subscription;
    queryParamsSub: Subscription;

    dirty = false;



    constructor(router:Router, route:ActivatedRoute) {
        
       
       // rilevo i parametri passati dal componente padre
       // in questo caso ID 
       route.params.subscribe(
           params => this.courseId = parseInt(params['id'])           
       );

        // In questo caso la descrizione
       route.queryParams.subscribe(
           params => this.description = params['description']
       );



       this.paramsSub = route.params.subscribe(
            params =>{
                this.courseId = parseInt(params['id']);
                //this.dirty = false;
            }
        );

        this.queryParamsSub = route.queryParams.subscribe(
            params => {
                this.description = params['description'];
            }
        );

        console.log('observers count',
            route.queryParams['observers'].length); 

    }

    previous(){
        return this.courseId-1;
    }

    next(){
        return this.courseId+1;
    }

    ngOnDestroy(){
        this.paramsSub.unsubscribe();
        this.queryParamsSub.unsubscribe();
    }

    
}

