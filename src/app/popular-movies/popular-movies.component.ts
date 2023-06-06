import { Component, Input, OnInit } from '@angular/core';
import { MovieApi } from '../movies/movie_api_model';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent  {
  @Input() movie : MovieApi;

}
