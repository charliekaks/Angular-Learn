import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent implements OnInit {
  myForm: FormGroup;
 
  ngOnInit(): void {
      this.myForm = new FormGroup({
        name: new FormControl(''),
        medium: new FormControl('Movies'),
        rating: new FormControl(''),
        description: new FormControl('')
      })
  }
  onSubmit(mediaItem){
    console.log(mediaItem)
  }
}
