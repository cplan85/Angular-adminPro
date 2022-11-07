import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'', 
  component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'graphics1', component: GraphicsComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]

},


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: '**', component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
