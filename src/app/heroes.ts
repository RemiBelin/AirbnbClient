import { InjectionToken } from '@angular/core';
import { Hero } from './hero';

export const MY_HERO1 = new InjectionToken<Hero>('hero');
export const MY_HERO2 = new InjectionToken<Hero>('hero2');

export const hero3:Hero = {id: 3, name:'33' , nbSelect: 18};