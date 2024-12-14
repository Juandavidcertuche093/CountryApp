import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  countries: Country[] = []

    constructor(
      private countrieService: CountriesService
    ){}

    searchByRegion(region: string): void {
      this.countrieService.searRegion(region)
      .subscribe(
        countries => {
          this.countries = countries;
        }
      )
    }

}
