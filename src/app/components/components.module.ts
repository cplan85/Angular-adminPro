import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrematorComponent } from './incremator/incremator.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IncrematorComponent
  ],
  exports: [
    IncrematorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
