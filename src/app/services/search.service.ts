import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  get getSearchTerm(){
    return this.searchTerm$.asObservable();
  }

  setsearchTerm(searchTerm: string){
    this.searchTerm$.next(searchTerm);
  }

}