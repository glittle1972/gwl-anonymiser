import { Component, OnInit } from '@angular/core';

import DATA from './app.config';

import { DataService } from './model/data.service';
import { Source} from './model/source.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gwl-anonymiser';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.addSource(new Source(DATA[0], 25));
    this.data.addSource(new Source(DATA[1], 99));
    this.data.addSource(new Source(DATA[1], 0));
    this.data.addSource(new Source(DATA[1], 100));
  }
}
