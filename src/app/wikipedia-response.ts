export interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      wordcount: number;
      pageid: number;
    }[]
  }
}
