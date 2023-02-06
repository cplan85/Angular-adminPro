import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {
    let i = -1;

    const obs$ = new Observable(observer => {

     
      const interval = setInterval(( ) => {
        i ++;
         //the next emits the value
      observer.next(i);

      if (i === 4) {
        clearInterval(interval);
        observer.complete();
      }

      if( i === 2) {
        observer.error('i arrived at 2 and observable will not arrive to complete')
      }
      }, 1000)
    });

    obs$.pipe().subscribe(
      value => console.log('Subscription:', value),
      (error) => console.warn('Error', error),
      () => console.info('This executes when Observable is finished')
    );
   }

  ngOnInit(): void {
  }

}
