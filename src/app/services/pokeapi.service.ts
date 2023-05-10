import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokemons(id: number): Observable<any> {
    const url = `${environment.pokeApiUrl}/pokemon/${id}`
    return this.http.get(url)
  }

  getOne(name: string): Observable<any> {
    const url = `${environment.pokeApiUrl}/pokemon/${name}`
    return this.http.get(url)
  }
}
