import { Component } from '@angular/core';
import { CountriesService } from './Countries.service';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Countries';
  constructor(private countryService:CountriesService){}
  countries:Country[] = this.countryService.getCountries();
}
