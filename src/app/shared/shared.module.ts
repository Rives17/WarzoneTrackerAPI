import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './pipes/filter-pokemon.pipe';



@NgModule({
  declarations: [
    SearchComponent,
    FilterPokemonPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    FilterPokemonPipe
  ]
})
export class SharedModule { }
