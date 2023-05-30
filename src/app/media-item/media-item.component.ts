import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Movie } from '../movies/movie-model';
import { MediaItemService } from '../movies/media-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem : Movie;
  @Output() delete = new EventEmitter();




  onDelete(){
    this.delete.emit(this.mediaItem);
  }
  watchTrailer(){
    console.log("Watching trailer")
  }
}
