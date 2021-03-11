import { R3TargetBinder } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

import { Source } from '../../model/source.model';

@Component({
  selector: '[node]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input('node') source!: Source;

  r: number = 50;

  x : number;
  y : number;

  constructor() { 
    this.x = Math.random() * 1000;
    this.y = Math.random() * 300;
  }

  ngOnInit(): void {
  }

  get cx() {
    return this.r * Math.sin((this.source.completed * 2 * Math.PI) / 100);
  }

  get cy() {
    return this.r * -Math.cos((this.source.completed * 2 * Math.PI) / 100);
  }

  get arc_complete() {
    return 'M 0 -' + this.r + ' A ' + this.r + ' ' + this.r +' -90 ' + (this.source.completed > 50 ? 1 : 0) + ' 1 ' + this.cx + ' ' + this.cy + ' L 0 0 Z';
  }
  get arc_incomplete() {
    return 'M 0 -' + this.r + ' A ' + this.r + ' ' + this.r +' 0 ' + (this.source.completed > 50 ? 0 : 1) + ' 0 ' + this.cx + ' ' + this.cy + ' L 0 0 Z';
  }
}
