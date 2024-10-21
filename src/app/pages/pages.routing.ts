import { LearningRxjsComponent } from './learning-rxjs/learning-rxjs.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './promises/promises.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PagesComponent } from './pages.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [

    {path:'dashboard', 
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
      {path: 'progress', component: ProgressComponent, data: {title: 'Progress Bar'}},
      {path: 'graphics1', component: GraphicsComponent, data: {title: 'Graphic 1'}},
      {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
      {path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
      {path: 'rxjs', component: RxjsComponent, data: {title: 'Rxjs'}},
      {path: 'learning-rxjs', component: LearningRxjsComponent, data: {title: 'Rxjs'}},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  
  },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule]
  })
  export class PagesRoutingModule { }