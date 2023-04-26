import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { LastMatches } from '../interfaces/matches';
import { PlayerStats } from '../interfaces/player';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  
  // private apiUrl: string = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone';
  // private matchesUrl: string = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches';
  
  // private headers = new HttpHeaders(environment.apiKey);

  constructor(private http: HttpClient) {}

    // getMatches(gametarg: string, platform: string): any {

    //   const url = `${environment.apiUrl}/${platform}/${encodeURIComponent(gametarg)}`;
    //   return this.http.get<PlayerStats>( url, {headers: this.headers}).subscribe(
    //     resp => console.log(resp)
        
    //   )

    // };

    // getDetails(matchId: string): Observable<LastMatches> {

    //   const url = `${environment.apiUrl}/${matchId}`;
    //   return this.http.get<LastMatches>( url )
    // };


    getMatches(platform: string, username: string, next: string = 'null') {
      const url = `http://localhost:3005/api/warzone/matches/${platform}/${username}?next=${next}`;
      return this.http.get(url);
    }
  
    getMatchDetails(matchId: string) {
      const url = `http://localhost:3005/api/warzone/matches/${matchId}`;
      return this.http.get(url);
    }

}
