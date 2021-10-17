import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WikipediaResponse } from './wikipedia-response';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  search(term: string) {
    return this.httpClient.get<WikipediaResponse>("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        srsearch: term,
        utf8: "",
        format: "json",
        origin: "*"
      }
    })
  }
}
