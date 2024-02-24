import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  //Get Pokemons
  getPokemons(limit: number, offset: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  //Get More Pokemons Data
  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  //Search for Pokemons
  searchData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}

