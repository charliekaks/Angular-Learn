import { Injectable } from '@angular/core';
import { Observable, of, switchAll } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MovieApi } from './movie_api_model';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl:string = 'http://localhost:3000/api/v1/feed';
  movies: Array<MovieApi>;
  constructor(private http: HttpClient) { }

  getPopularMovies() : Observable<MovieApi[]>{
    return this.http.get<MovieApi[]>(this.apiUrl, httpOptions).pipe(
      catchError((error)=>{
        console.log(error);
        return of(error)
      })
    )
  }
}
