import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  currentPhoto = {id:'', name:''};

  ngOnInit() {

    console.log("SlideShowComponent ngOnInit starting...");
   
    this.currentPhoto.id = this.data.photoId;
    this.currentPhoto.name = this.data.photos[this.data.photoId].name;
  }
  
  nextPhoto()
  {
    console.log("nextPhoto starting...");
    const new_id:number = parseInt(this.currentPhoto.id) +1;

    if(new_id < this.data.photos.length)
    {
      this.currentPhoto.id = new_id + '';
      this.currentPhoto.name =  this.data.photos[new_id].name;
    }

  }

  previousPhoto()
  {
    console.log("previousPhoto starting...");
    const new_id:number = parseInt(this.currentPhoto.id) -1;

    if(new_id > 0 )
    {
      this.currentPhoto.id = new_id + '';
      this.currentPhoto.name =  this.data.photos[new_id].name;
    }

  }
}
