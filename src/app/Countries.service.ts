import { Injectable } from '@angular/core';
import { Country } from './Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  //This will just hold a list of countries for now
  countries:Country[] =[
      new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/255px-Flag_of_Mexico.svg.png"),
      new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/255px-Flag_of_Algeria.svg.png"),
      new Country("Japan", "Japanese", "Kon'nichiwa sekai \n こんにちは世界", ["red", "black", "white"],"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png"),
      new Country("Germany", "German", "Hallo Welt", ["black", "red", "gold"],"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png")
    ];  
  constructor() { }
  getCountries():Country[]{
    return this.countries;
  }
}
