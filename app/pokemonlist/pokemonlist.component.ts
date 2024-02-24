import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { response } from 'express';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrl: './pokemonlist.component.css'
})
export class PokemonlistComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number=0;
  searchedPokemon: any;
  keyword: string[] = [] ;
  isShowDivSEARCH = false;
  isShowDivLIST = true;


  constructor(
    private dataService: DataService

  ) { }

  ngOnInit():void{
    this.getPokemons();

  }

  //Get Pokemons
  getPokemons(){
  this.dataService.getPokemons(12, (this.page-1) *12)
  .subscribe((response: any) => {
    this.totalPokemons = response.count;

    response.results.forEach(result => {
      this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any)  =>{
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons)
        });
    });
  });
  }

  onSubmit(name: string[]) {
    this.dataService.getMoreData(<string><unknown>name)
    .subscribe((uniqResponse: any)  => {
        this.searchedPokemon=uniqResponse;
        console.log(this.searchedPokemon)
      })
  }

  clearSearch() {
    this.keyword = [];
  }

  toggleDisplaySEARCH() {
    this.isShowDivLIST = false;
    this.isShowDivSEARCH = true;
  }
  toggleDisplayLIST() {
    this.isShowDivSEARCH = false;
    this.isShowDivLIST = true;
  }

}



