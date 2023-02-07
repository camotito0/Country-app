import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  searchCountry( country:string ):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}?fields=name,capital,alpha2Code,flag,population`
    return this.http.get<Country[]>( url )
    // tambien se suele trabajar de está manera, se atrapa el
    // error con el catchError y los seteamos con of para enviar un arreglo vacio
     /*  .pipe(
        catchError( err => of([]) )
      ); */
  }

  searchCapital( capital:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}?fields=name,capital,alpha2Code,flag,population`
    return this.http.get<Country[]>( url )
  }

  searchRegion( region:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}?fields=name,capital,alpha2Code,flag,population`
    return this.http.get<Country[]>( url )
  }

  getCountryByParamsCode( code:string ): Observable<Country>  {
    const url = `${this.apiUrl}/alpha/${code}?fields=name,capital,alpha2Code,alpha3Code,flag,population,translations`
    return this.http.get<Country>( url );
  }

}
