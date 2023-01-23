import { Component} from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
//import { Color } from 'ng2-charts';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent {

    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: [ 350, 450, 100 ],
          backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
        },
       
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';
  
      // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public colors: Array<any> = [
    { backgroundColor:'#9E120E' },
    { backgroundColor: 'green' },

  ]

  constructor() { }

}
