import { Component, Input } from '@angular/core';
import { MovieApi } from '../movies/movie_api_model';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent {
  @Input() Movie : MovieApi;
}
