import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  constructor() { }
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
get(){
  return this.mediaItems;
}
add(mediaItem){
  this.mediaItems.push(mediaItem)
}
delete(mediaItem){

  let index : number= this.mediaItems.indexOf(mediaItem);
  console.log(index);
  if(index >= 0){
    this.mediaItems.splice(index, 1)
  }
}
}
