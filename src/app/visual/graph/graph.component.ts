import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../model/data.service';
import { Source } from '../../model/source.model';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  private _options: { width: number, height: number } = { width: 800, height: 600 };

  get options() {
    return this._options = {
      width: window.innerWidth * 0.8,
      height: window.innerHeight * 0.8
    };
  }

  get sources() {
    return this.dataService.getSources();
  }
}
