import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { PlayerStats } from '../interfaces/player';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  
  private headers = new HttpHeaders(environment.apiKey);

  constructor(private http: HttpClient) {}

    getMatches(gametarg: string, platform: string): any {

      const url = `${environment.apiUrl}/${encodeURIComponent(gametarg)}/${platform}`;
      return this.http.get<PlayerStats>( url, {headers: this.headers}).subscribe(
        resp => console.log(resp)
        
      )

    };

}
