import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, DialogPosition} from '@angular/material/dialog';
import { SlideShowComponent } from '../slide-show/slide-show.component';
//import { HERO1 } from '../heroes';
import { Hero } from '../providers/hero';
import { MY_HERO1, MY_HERO2 } from '../providers/heroes';
import { ListingService } from '../listing.service';

export interface Tile {  cols: number;
  rows: number;
  name: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {


   constructor(private listing:ListingService,public dialog: MatDialog,@Inject(MY_HERO2) private hero: Hero) {
    
    const testhero:Hero = {id: 43, name:'rt' , nbSelect: 18};
    
    const localHero:Hero = this.hero;
    
    console.log("hero=" + this.hero);
   }

  photos;
  
  tiles: Tile[] = [
    {name: '', cols: 2, rows: 2},
    {name: '', cols: 1, rows: 1},
    {name: '', cols: 1, rows: 1},
    {name: '', cols: 1, rows: 1},
    {name: '', cols: 1, rows: 1}
  ];

  ngOnInit() {

    this.listing.getPhotos().subscribe((imgs:Array<Object>) => {
                      console.log("callback5 is starting!");          
                      
                      this.tiles.map((tile,p) => { tile.name = imgs[p]['name'];return tile;  });
                      /*
                      Remplace :
                      for(let k=0;k<this.tiles.length;k++)
                      {
                        if(k < imgs.length)
                          this.tiles[k].name = imgs[k]['name'];
                     }*/
            }, err => console.log('HTTP Error', err));
                          
  }

  openSlideShow(photo,photoId)
  {
    console.log("starting openSlideShow photoId=" + photoId);

    const dialogData = {};

    dialogData['photoId'] = photoId;
    dialogData['photos'] = this.tiles;
     

    const dialogRef = this.dialog.open(SlideShowComponent, {
      width: '98%',
      height: '80%',
      data: dialogData
    });
   
    const pos:DialogPosition = { top: '15px'};

    dialogRef.updatePosition(pos);

  }


}
