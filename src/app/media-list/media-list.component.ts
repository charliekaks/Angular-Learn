import { Component , OnInit} from '@angular/core';
import { MediaItemService } from '../movies/media-item.service';
import { Movie } from '../movies/movie-model';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {
  mediaItems : Movie[];
  isloading : boolean = true;
  constructor(private mediaItemService: MediaItemService){}
  ngOnInit(): void {
     this.mediaItemService.get().subscribe( items => {
        this.mediaItems = items;
        this.isloading = false;
        console.log("updated array", this.mediaItems)
     })
  }
  onDeleteMediaItem(mediaItem){
    this.mediaItemService.delete(mediaItem);
  }


}
