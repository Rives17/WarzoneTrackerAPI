import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { PlayerStats } from '../interfaces/player';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private apiKey = '4d26370b-6ddb-4397-a6ea-252cd0c81f75';

  private headers = new HttpHeaders({
  'TRN-Api-Key': '4d26370b-6ddb-4397-a6ea-252cd0c81f75',
  'Content-Type':  'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Origin': '*'});

  constructor(private http: HttpClient) {}

    getMatches(platform: string, gametarg: string): Observable<any> {

      const url = `${environment.baseUrl}/${platform}/${gametarg}`;
      const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Accept-Language', 'en')
      .set('TRN-Api-Key', this.apiKey);

      return this.http.get<PlayerStats>( url, {headers})

    };

}
