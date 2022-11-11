import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  constructor() { }

  progress:number = 40;

  get getPercentage() {
    return `${this.progress}%`
  }

  changeValue(value: number) {

    if(this.progress >= 100 && value >= 0) {
      this.progress =100;
    }

    if(this.progress <= 0 && value < 0) {
      this.progress =0;
    }
    this.progress = this.progress + value;
  }
 

}
