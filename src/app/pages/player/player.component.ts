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
  public filteredPokemons: Pokemon[] = [];
  public searchTerm: string = '';
  public pageSize: number = 8;
  public currentPage: number = 1;
  public totalPages: number = 0;

  constructor(private pokeApiService: PokeapiService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    for (let id = 1; id <= 151; id++) {

    this.pokeApiService.getPokemons(id)
        .subscribe(data => {
          this.pokemons.push(data)
          this.filteredPokemons = this.pokemons;
          this.totalPages = Math.ceil(this.filteredPokemons.length / this.pageSize);
        })
    }
  }
  onPageChange(page: number): void {
    this.currentPage = page;
  }

}
