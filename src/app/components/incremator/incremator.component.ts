import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incremator',
  templateUrl: './incremator.component.html',
  styles: [
  ]
})
export class IncrematorComponent {

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
