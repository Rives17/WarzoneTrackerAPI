import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/player/player.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { 
    path: 'api', 
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'player/:platform/:username', component: PlayerComponent },
      { path: 'user', component: UserComponent},
      { path: 'login', component: LoginComponent },

    ]
  },
  
  { path: '', redirectTo: 'api/home', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
