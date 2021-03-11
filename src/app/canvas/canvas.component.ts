import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataService } from '../model/data.service';

import { Source } from '../model/source.model';
import { Scale } from '../model/scale.model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {
  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl!: ElementRef;
    
  /** Canvas 2d context */
  private context!: CanvasRenderingContext2D;

  private model: DataService;

  constructor(model: DataService) {
    this.model = model;
  }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d')!;
  
    this.draw();
  }

  /**
   * Draws something using the context we obtained earlier on
   */
  private draw() {
    var sources:Source[] = this.model.getSources();
    var scale = new Scale((this.canvasEl.nativeElement as HTMLCanvasElement).width,
      (this.canvasEl.nativeElement as HTMLCanvasElement).height,
      sources.length);
    // draw the first in the middle then start placing round the clock starting at 3
    var first = sources.shift();
    this.drawSource(scale, first!, scale.canvasWidth / 2, scale.canvasHeight / 2);
    for (var i = 0; i < sources.length; i++) {
//      this.drawSource(scale, sources[i], x, y);
//      x = x + this.width + this.gap;
    }
  }

  private drawSource(scale: Scale, source: Source, x: number, y: number) {
    this.context.fillStyle = "#ffdfdf";
    this.context.fillRect(x - scale.width / 2, y - scale.height / 2, scale.width, scale.height);
    this.context.fillStyle = "#ffafaf";
    this.context.font = "30px Arial";
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.fillText(source.file.name, x, y);
}

  open() {
    window.open('https://github.com/realappie', '_blank')
  }

}
