import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor( private http: HttpClient ) { }

  searchCountry( textInput:string ):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${textInput}`
    return this.http.get<Country[]>( url )
    // tambien se suele trabajar de está manera, se atrapa el
    // error con el catchError y los seteamos con of para enviar un arreglo vacio
     /*  .pipe(
        catchError( err => of([]) )
      ); */
  }

  searchCapital( textInput:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${textInput}`
    return this.http.get<Country[]>( url )
  }

  searchRegion( textInput:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${textInput}`
    return this.http.get<Country[]>( url )
  }

  getCountryByParamsCode( code:string ): Observable<Country>  {
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country>( url );
  }

}
