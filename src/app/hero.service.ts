import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // Angular injects the singleton MessageService in this proprty when it creates the HeroService
  // Injects MessageService in HeroService which is injected into HeroesComponent
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
