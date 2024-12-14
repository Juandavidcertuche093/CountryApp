import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  //PROPIEDADES
  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(
    private http: HttpClient
  ) { }

  //METODO
  searchCapital( term: string ):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${ term }`)
    .pipe(
      catchError(error => of([]))
    )
  }

  searchCountry( term: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${ term }`)
    .pipe(
      catchError(error => of([]))
    )
  }

  searRegion( region: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${ region }`)
    .pipe(
      catchError(error => of([]))
    )
  }
}
