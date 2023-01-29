import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Input } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {

  @Input() title: string = 'No Title';

  @Input() data: number[] = [ 350, 450, 100 ];
  @Input() labelsTest: string[] =[];
    // Doughnut
  @Input('labels') doughnutChartLabels = ['label1', 'label2', 'label3'];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.data,
          backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
        },
       
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

  constructor() {
    
   }

}
