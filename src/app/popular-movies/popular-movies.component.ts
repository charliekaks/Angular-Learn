import { Component, Input, OnInit } from '@angular/core';
import { MovieApi } from '../movies/movie_api_model';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  Movies : MovieApi[];
  isloading : boolean = true;
  constructor(private movieApi: MoviesService){}

  ngOnInit(): void{
    this.movieApi.getPopularMovies().subscribe((item)=>{
        this.Movies = item;
        this.isloading = false;
    })
  }

}
