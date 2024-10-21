import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, take, map, interval, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    //   this.returnObservable().pipe(
    //    retry(2)
    //  ).subscribe({
    //    next: (v) => console.log("subscription", v),
    //    error: (e) => console.error(e),
    //    complete: () => console.info('complete') 
    //    });

    this.intervalSubs = this.returnInterval().subscribe(
      console.log)

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return  interval(100)
                      .pipe(
                        //map receives the value that we want to emit
                        map(v => v + 1),
                        filter(v => v % 2 == 0),
                        //take(10),
                      );

  }

   returnObservable () {
    let i = -1;

    return new Observable<number>(observer => {

     
      const interval = setInterval(( ) => {
        i ++;
         //the next emits the value
      observer.next(i);

      if (i === 4) {
        clearInterval(interval);
        observer.complete();
      }

      if( i === 2) {
        i = 0;
        observer.error('i arrived at 2 and observable will not arrive to complete')
      }
      }, 1000)
    });
   }

  ngOnInit(): void {
  }

}
