import { SharedModule } from './../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';

import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
  DashboardComponent,
  ProgressComponent,
  GraphicsComponent,
  PagesComponent
  ],
  exports: [
    DashboardComponent,
  ProgressComponent,
  GraphicsComponent,
  PagesComponent
  ],

  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    SharedModule
  ]
})
export class PagesModule { }
