import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrematorComponent } from './incremator/incremator.component';



@NgModule({
  declarations: [
    IncrematorComponent
  ],
  exports: [
    IncrematorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
