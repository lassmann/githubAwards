import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {languages} from '../seed/languages'
import 'rxjs/add/operator/map';

@Injectable()
export class GithubRanking {
  baseUrl = 'https://trackexpenses.herokuapp.com/api/scraper';

  constructor(public http: Http) {
  }

  getCityRanking(city: string, language: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cityranking/${language}/${city}`)
      .map(res => res.json())
  }

  getCountryRanking(country: string, language: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/countryranking/${language}/${country}`)
      .map(res => res.json())
  }

  getWorldRanking(language: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ranking/world/${language}`)
      .map(res => res.json())
  }

  getUserRanking(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/userRanking/${username}`)
      .map(res => res.json())
  }

  getLanguages(){
    return languages;
  }

}
