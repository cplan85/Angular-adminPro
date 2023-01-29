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
  public labels1 = [ 'Tacos', 'In-Store Sales', 'Mail-Order Sales' ];
  public data1 = [ 350, 450, 100 ];
  
      // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

}
