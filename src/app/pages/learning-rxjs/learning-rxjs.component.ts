import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-rxjs',
  templateUrl: './learning-rxjs.component.html',
  styleUrls: ['./learning-rxjs.component.css']
})
export class LearningRxjsComponent implements OnInit {

  observable$: any;
  ngOnInit() {
    
    // const obs$ = new Observable(observer => {

     
    
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //     observer.complete();
 
    //   })

    this.observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    this.observable$.subscribe(
      (value:any) => console.log(value),
      (err:any) => {},
      () => console.log('this is the end')
    );
    };

    ngOnDestroy() {
      //to reduce memory leak
     // this.observable$.unsubscribe();
    }

  }

 


