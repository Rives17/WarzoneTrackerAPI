import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class PagesModule { }
