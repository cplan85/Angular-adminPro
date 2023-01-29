import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrematorComponent } from './incremator/incremator.component';
import { FormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrematorComponent,
    DonutComponent,
  ],
  exports: [
    IncrematorComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }
