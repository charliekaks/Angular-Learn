import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MediaItemService } from '../movies/media-item.service';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private mediaItemService: MediaItemService){}
  ngOnInit(): void {
      this.myForm = new FormGroup({
        name: new FormControl('', Validators.compose([
          Validators.required
        ])),
        medium: new FormControl('Movies'),
        rating: new FormControl('', Validators.compose([
          Validators.required, this.ratingValid
        ])),
        description: new FormControl(''),
      })
  }

  ratingValid(control: AbstractControl) : { [key: string]: boolean } | null { 
    let checkRating = parseInt(control.value);
    if(checkRating >=0 && checkRating<=10){
      return null;
    }else{
      return { rating : true}
    }
  }
  onSubmit(mediaItem){
    this.mediaItemService.add(mediaItem);
  }
}
