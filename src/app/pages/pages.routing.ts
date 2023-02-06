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
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graphics1', component: GraphicsComponent},
      {path: 'account-settings', component: AccountSettingsComponent},
      {path: 'promises', component: PromisesComponent},
      {path: 'rxjs', component: RxjsComponent},
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