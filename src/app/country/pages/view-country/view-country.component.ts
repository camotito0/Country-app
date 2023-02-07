import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit{
  //significa que país puede ser nulo pero que siempre va a ser de tipo Country
  country!: Country;

  constructor(
    // nos subscribimos a cualquier cambio del url
    private activatedRoute: ActivatedRoute,
    private countryService:   CountryService
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      //operador nos permite recibir y regresar un observable
      switchMap( (params) => this.countryService.getCountryByParamsCode( params['id'] )),
      // el tap recibe el producto del switchMap (observable) y lo muestra en consola
      tap(console.log)
    )
    .subscribe( (resp) => {
      this.country = resp;
     })

   /*  this.activatedRoute.params
    .subscribe(
      params => {
        this.countryService.getCountryByParamsCode( params['id'] )
        .subscribe(
          country => {
            this.country = country;
          }
        )
      }
    ) */
  }
}
