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