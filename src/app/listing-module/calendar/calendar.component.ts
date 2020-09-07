import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MatInput } from '@angular/material/input';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Router } from '@angular/router';
import { bookingData } from '../../bookingData';

interface Voyageurs  {
  nbAdults:number,
  nbEnfants:number,
  nbBebes:number
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private router: Router, private data:bookingData) { }

 ngOnInit() {


  }

  voyageurs:Voyageurs = { nbAdults:1, 
                          nbEnfants:0, 
                          nbBebes:0
                        };
 
  minEndingDate:Date;

  //@ViewChild('startingDateInput') startDateInput:MatInput;
  
   ajoutAdulte()
  {
    this.voyageurs.nbAdults++;
 }

  soustraireAdulte()
  {
    this.voyageurs.nbAdults--;
  }

  ajoutEnfant()
  {
    this.voyageurs.nbEnfants++;
 }

  soustraireEnfant()
  {
    this.voyageurs.nbEnfants--;
  }
  openDatePopup(datepicker:MatDatepicker<Moment>)
  {
         console.log("openDatePopup starting...");
      datepicker.open();

  }
  focusEndingInput(endingInput:MatInput,startingDatepicker:MatDatepicker<Moment>,endingDatepicker:MatDatepicker<Moment>)
  {
    console.log("focusEndingDate starting...modif local 3");

    //this.minEndingDate = datepicker._selected.toDate();
    //startingDatepicker.
    //startingDatepicker._selectMonth;

    endingInput.focus();

  }  

  bookForDates(startingDateInput:MatInput)
  {
    moment.locale("fr");
    
    this.data.dateS =  moment(startingDateInput.value,"DD/MM/YYYY");;
  
    this.router.navigate(["reactiveform"]);

  }
}
