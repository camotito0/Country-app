import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';
  get params () {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population')
  }

  constructor( private http: HttpClient ) { }

  searchCountry( country:string ):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${country}`
    return this.http.get<Country[]>( url, { params: this.params } )
    // tambien se suele trabajar de está manera, se atrapa el
    // error con el catchError y los seteamos con of para enviar un arreglo vacio
     /*  .pipe(
        catchError( err => of([]) )
      ); */
  }

  searchCapital( capital:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>( url , { params: this.params })
  }

  searchRegion( region:string ): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}`
    return this.http.get<Country[]>( url , { params: this.params })
  }

  getCountryByParamsCode( code:string ): Observable<Country>  {
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country>( url );
  }

}
