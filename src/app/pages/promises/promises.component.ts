import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsers().then(users => {
      console.log(users)
    })

    /*
    const promise = new Promise( ( resolve, reject ) => {

      if (false ) {
        resolve('Hello World');
      } else {
        reject('Something happened')
      }
    });

    promise.then( (message) => {
      console.log(message)
    })
    .catch(error => console.log('Error in my promise', error))

    console.log('End of Init')
    */
  }

  getUsers() {

    return new Promise( () => {

        fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then( body => console.log(body.data));
    })
  }

}
