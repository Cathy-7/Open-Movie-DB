import {Component} from '@angular/core';
import {OpenMovieDbService} from "./service/open-movie-db.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;
  errorMessage: string = '';

  searchByTitle: string = '';
  searchByYear: string = '';
  searchById: string = '';

  showMoreDetails = false;
  constructor(private openMovieDbService: OpenMovieDbService) {
  }

  searchMovie() {
    this.openMovieDbService.getMovieDetails(this.searchByTitle, this.searchByYear, this.searchById).then(result => {
      console.log(result)
      if(result.Response === 'False'){
        this.data = {}
        this.errorMessage = result.Error;
        console.log(result.Response)
      }else{
        this.errorMessage = '';
        this.data = result;
        console.log(this.data)
      }
    })
  }

  toggleMoreDetails(){
    this.showMoreDetails = !this.showMoreDetails;
  }

}
