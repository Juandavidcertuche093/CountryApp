import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  countries: Country[] = []
  initialValue: string = ''

  constructor(
    private countrieService: CountriesService
  ){}


  ngOnInit(): void {
    this.countries = this.countrieService.cacheStore.byCountries.countries
    this.initialValue = this.countrieService.cacheStore.byCountries.term
  }

  searchByCountry( term: string ):void{
    this.countrieService.searchCountry( term )
    .subscribe(
      countries => {
        this.countries = countries;
      }
    )

  }




}
