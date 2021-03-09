import { Injectable } from '@angular/core';

import { Source} from './model/source.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }

  public getFiles(): Source[] {
    return [ new Source('Workday', 10), new Source('Active Directory', 5) ];
  }
}
