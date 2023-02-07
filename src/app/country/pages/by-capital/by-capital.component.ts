import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {
  textInput:string = '';
  errorMessage:boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) {}

  search( inputValue:string ) {
    this.errorMessage = false;
    this.textInput = inputValue;
    this.countryService.searchCapital( this.textInput )
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
}
