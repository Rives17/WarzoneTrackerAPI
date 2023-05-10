import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NopagefoundComponent,
    PlayerComponent,
    UserComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [
  ]
})
export class PagesModule { }
