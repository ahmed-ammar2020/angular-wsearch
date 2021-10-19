import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lists: any = [];
  constructor(
    private wikipedia: WikipediaService,
  ) {}

  // get this term from a child
  getTerm(term: string) {
    this.wikipedia.search(term).subscribe((search) => {
      this.lists = search;
    });
  }
}
