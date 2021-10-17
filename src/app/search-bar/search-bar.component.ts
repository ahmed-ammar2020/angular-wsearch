import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() send = new EventEmitter<string>();
  term = "";
  constructor() { }

  ngOnInit(): void {
  }

  CatchTerm(value: string) {
    this.term = value;
  }

  submitForm(e: any) {
    e.preventDefault();
    this.send.emit(this.term);
  }

}
