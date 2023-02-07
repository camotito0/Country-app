import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  textInput:string = "";
  errorMessage: boolean = false;
  countries : Country[] = [];

  constructor( private countryService: CountryService ) {}

  buscar( inputValue:string ) {
    this.errorMessage = false;
    this.textInput = inputValue;

    this.countryService.searchCountry(this.textInput)
    .subscribe(
      (resp) => {
        this.countries = resp;
      },
      (err) => {
        this.errorMessage = true;
        this.countries = [];
      }
    )
  }

  suggestions( inputValue:string ) {
    this.errorMessage = false;
    console.log(inputValue);
  }


}
