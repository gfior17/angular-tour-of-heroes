import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  // Angular injects the singleton MessageService in this proprty when it creates the HeroService
  // Injects MessageService in HeroService which is injected into HeroesComponent
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  //GIOF-Had to customize this due to strict typechecking as it did not work as per the tutorial's code
  getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      const aHero = HEROES.find(hero => hero.id === id);
      if (aHero === undefined) {
        throw new TypeError('no Heroes found with id '+ id);
      }
      return of(aHero);
    }  
  }
