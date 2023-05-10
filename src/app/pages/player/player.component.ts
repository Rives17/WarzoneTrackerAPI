import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PokeapiService } from 'src/app/services/pokeapi.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  public pokemons: any[] = [];
  public searchTerm!: string;

  constructor(private pokeApiService: PokeapiService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    
    for (let id = 1; id <= 151; id++) {
  
      this.pokeApiService.getPokemons(id)
        .subscribe(data => {
          this.pokemons.push(data)
        })
    }
  }

  filterPokemons() {
  
    if(!this.searchTerm) return this.getPokemons()

    this.pokemons = this.pokemons.filter( pokemon => 
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    
  }


  getOne(name: string) {
    console.log(name);
    
  }
}
