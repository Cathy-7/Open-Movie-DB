import {Component} from '@angular/core';
import {OpenMovieDbService} from "./service/open-movie-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'untitled';
  data: any;

  searchByTitle: string = '';
  searchByYear: string = '';
  searchById: string = '';

  constructor(private openMovieDbService: OpenMovieDbService) {
    // openMovieDbService.getMovieDetails('H').then(result => {
    //   this.data = result;
    //   console.log(this.data)
    // })
  }

  searchMovie() {
    console.log(this.searchByTitle)
    this.openMovieDbService.getMovieDetails(this.searchByTitle, this.searchByYear, this.searchById).then(result => {
      this.data = result;
    })
  }

}
