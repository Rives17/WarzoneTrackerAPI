import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public onePokemon: any[] = []

  constructor(private pokeApiService: PokeapiService,
              private  route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getOnePokemon()
  }

  getOnePokemon() {

    let name!: string;

    this.route.params.subscribe(params => {
      name = params['name'];
    })
    
    this.pokeApiService.getOne(name)
      .subscribe( resp => {
        console.log(resp)
        this.onePokemon.push(resp)
      })
  }

}
