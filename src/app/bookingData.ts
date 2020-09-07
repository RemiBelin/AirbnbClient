import { Injectable } from '@angular/core';
import { Moment } from 'moment';

@Injectable()
export class bookingData {

    public dateS: Moment;
    public dateE: Moment;

    public constructor() { }

}