import { Injectable } from '@angular/core';

import { Source } from './source.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sources : Source[] = [];

  constructor() { }

  public addSource(source: Source) {
    this.sources.push(source);
  }

  public getSources() : Source[] {
    return this.sources;
  }
}
