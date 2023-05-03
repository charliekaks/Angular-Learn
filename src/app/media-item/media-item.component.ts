import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() favorite = new EventEmitter();

  onFavorite(){
    this.favorite.emit(this.mediaItem);
  }
  watchTrailer(){
    console.log("Watching trailer")
  }
}
