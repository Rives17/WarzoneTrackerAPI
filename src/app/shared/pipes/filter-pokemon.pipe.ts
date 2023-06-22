import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Pipe({
  name: 'filterPokemon'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(pokemons: Pokemon[], searchTerm: string, pageSize: number, currentPage: number): Pokemon[] {

    const filteredPokemons = pokemons.filter( pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const startIndex = ( currentPage - 1 ) * pageSize;
    const endindex = startIndex + pageSize;

    return filteredPokemons.slice(startIndex, endindex)
  }

}
