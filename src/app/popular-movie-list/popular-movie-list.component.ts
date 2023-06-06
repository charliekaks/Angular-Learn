import { Component, OnInit } from '@angular/core';
import { MovieApi } from '../movies/movie_api_model';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-popular-movie-list',
  templateUrl: './popular-movie-list.component.html',
  styleUrls: ['./popular-movie-list.component.css']
})
export class PopularMovieListComponent implements OnInit{
  Movies : MovieApi[];
  isLoading : boolean = true;
  constructor(private movieApi: MoviesService){}

  ngOnInit(): void{
    this.movieApi.getPopularMovies().subscribe((item)=>{
        this.Movies = item;
        this.isLoading = false;
    })
  }
}
