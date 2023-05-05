import { Component , OnInit} from '@angular/core';
import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {
  mediaItems : Array<{ id: number, name: string, trailerLink: string, description: string, medium: string, rating: string }>;
  constructor(private mediaItemService: MediaItemService){}
  ngOnInit(): void {
     this.mediaItems = this.mediaItemService.get()
  }
  onDeleteMediaItem(mediaItem){
    this.mediaItemService.delete(mediaItem);
  }


}
