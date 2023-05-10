import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from '../guards/auth.guard';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
{ 
    path: 'api',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'player/:platform/:username', component: PlayerComponent },
      { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'pokemon/:name', component: PokemonComponent},
    ]
  },
]

  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }
  