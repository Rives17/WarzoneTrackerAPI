import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

import { PokeapiService } from 'src/app/services/pokeapi.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {

  public pokemons: Pokemon[] = [];

  constructor(private pokeApiService: PokeapiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    for (let id = 1; id <= 151; id++) {

    this.pokeApiService.getPokemons(id)
        .subscribe(data => {
          this.pokemons.push(data)
        })
    }
  }

}
