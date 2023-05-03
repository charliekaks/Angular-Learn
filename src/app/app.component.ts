import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-app';

  firstMediaItem : Object = {
    name : "Avengers Endgame",
    trailerLink : "url",
    description : "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    watchedOn : "20/2/2022",
    rating: "9/10"
  }
  onFavorite(mediaItem){}
}
