import { Component } from '@angular/core';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent {
  onFavorite(mediaItem){}
  mediaItems : Array<{ id: number, name: string, trailerLink: string, description: string, watchedOn: string, rating: string }> = [
    {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    watchedOn : "20/2/2022",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    watchedOn : "20/2/2022",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    watchedOn : "20/2/2022",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    watchedOn : "20/2/2022",
    rating: "9/10"
  },
  {
    id:1,
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    watchedOn : "20/2/2022",
    rating: "9/10"
  }
]

}
