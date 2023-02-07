import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  textInput:string = '';


  ngOnInit(): void {
    // se dispara una unica vez cuando el componente se renderiza
    this.debouncer.pipe(debounceTime(300)).subscribe( value =>  { this.onDebounce.emit( value ) })
  }

  buscar () {
    this.onEnter.emit( this.textInput )
  }

  keyPressed() {
    this.debouncer.next( this.textInput )
    /* const value = event.target.value
    console.log(value);
    console.log(this.textInput); */
  }

}
