import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenMovieDbService {
  baseUrl = 'http://www.omdbapi.com/?'

  constructor() {
  }

  //The search results should be displayed as movie in a way that showcases the title,
  // the cover image, and links to the details about the movie

  //Each movie box can be collapsed or expanded (by clicking on details button)
  // to see the movie details
  async getMovieDetails(title: string, year?: string, id?: string) {
    return await fetch(this.baseUrl + new URLSearchParams({
      t: title,
      i:id ? id : '',
      y: year ? year : '',
      apikey: '8c184d19'
    }))
      .then(response => response.json())
  }
}
