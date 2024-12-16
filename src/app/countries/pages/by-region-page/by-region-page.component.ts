import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  countries: Country[] = []
  regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania']
  selectedRegion?: Region;


    constructor(
      private countrieService: CountriesService
    ){}

  ngOnInit(): void {
    this.countries = this.countrieService.cacheStore.byRegion.countries
    this.selectedRegion = this.countrieService.cacheStore.byRegion.region
  }

    searchByRegion(region: Region): void {

      this.selectedRegion = region

      this.countrieService.searRegion(region)
      .subscribe(
        countries => {
          this.countries = countries;
        }
      )
    }

}
