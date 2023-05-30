import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItemService } from '../movies/media-item.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movies/movie-model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  isloading : boolean = true;
  @Output() delete = new EventEmitter();
  @Input() mediaItem: Movie;
  
  constructor(private mediaItemService:MediaItemService, private route: ActivatedRoute){}
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.mediaItemService.getMovie(id).subscribe(
      movie => {
        console.log(movie);
        this.mediaItem = movie;
        this.isloading = false;
      }
    )
  }
  onDelete(){
    this.delete.emit(this.mediaItem);
  }
  watchTrailer(){
    console.log("Watching trailer")
  }
}
