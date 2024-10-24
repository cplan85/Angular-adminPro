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
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LearningRxjsComponent } from './learning-rxjs/learning-rxjs.component';



@NgModule({
  declarations: [
  DashboardComponent,
  ProgressComponent,
  GraphicsComponent,
  PagesComponent,
  AccountSettingsComponent,
  PromisesComponent,
  RxjsComponent,
  LearningRxjsComponent
  ],
  exports: [
  DashboardComponent,
  ProgressComponent,
  GraphicsComponent,
  PagesComponent,
  AccountSettingsComponent
  ],

  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PagesModule { }
