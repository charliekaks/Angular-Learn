import { Injectable } from '@angular/core';
import { Observable, of, switchAll } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Movie } from './movie-model';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  mediaItems : Array<{ id: number, name: string, trailerLink: string, description: string, medium: string, rating: string }> = [
    {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    medium : "Movies",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    medium : "Movies",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    medium : "Movies",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    medium : "Movies",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    medium : "Movies",
    rating: "9/10"
  }
]
apiUrl:string = 'http://localhost:3000/api/v1/movies';
movies: Array<Movie>;
constructor(private http: HttpClient) { }

getMovies() : Observable<Movie[]>{
return this.http.get<Movie[]>(this.apiUrl,
  httpOptions).pipe(
    catchError(error => {
      console.error('Error occurred during Get request', error);
      // Handle any errors here
      return of(error); // Return an Observable with the error to continue the error flow
    })
  )
}

getMovie(id) : Observable<Movie>{
  return this.http.get<Movie>(this.apiUrl + `/${id}`,httpOptions).pipe(
    catchError(error =>{
      console.error('Error occurred during Get request', error);
      return of(error)
    })
  )
}
addMovie(mediaItem : Movie){
  return this.http.post<Movie>(this.apiUrl, mediaItem, httpOptions).pipe(
  catchError(error => {
    console.log(error)
    return of(error)
  })    
  )
}
delete(mediaItem){

  let index : number= this.mediaItems.indexOf(mediaItem);
  console.log(index);
  if(index >= 0){
    this.mediaItems.splice(index, 1)
  }
}
}
