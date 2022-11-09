import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //path: '/dashboard' PagesRouting
   //path: '/auth' AuthRouting
   {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
  AuthRoutingModule,
  PagesRoutingModule],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
