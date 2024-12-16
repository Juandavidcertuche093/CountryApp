import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,//proporciona acceso a información sobre la ruta activa, como parámetros, fragmentos, y datos asociados.
    private router: Router,
    private countriesService: CountriesService,

  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
    )
    .subscribe( country => {

      if ( !country ) {
        return this.router.navigateByUrl('');
      }

      console.log('TENEMOS UN PAIS')

      return
    })

  }
}
