import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {
  regionsCode : string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC'
  ];

  activeRegion: string = '';

  regions: Country[] = [];

  constructor( private countryService: CountryService ) {}

/* getRegions() {
    this.countryService.searchRegion( this.activeRegion )
    .subscribe(
      (resp) => this.regions = resp
    )
  } */

  getClassCss( region:string ) {
    return region === this.activeRegion ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activateRegion(region:string) {
    if( region === this.activeRegion) {return;}
    this.activeRegion = region;
    this.regions = [];
    this.countryService.searchRegion( this.activeRegion )
    .subscribe( resp => this.regions = resp)
  }

}
