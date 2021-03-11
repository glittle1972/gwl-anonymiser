import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';  
import { AboutComponent } from './about/about.component';
import { CanvasComponent } from './canvas/canvas.component';
import { GraphComponent } from './visual/graph/graph.component';

const routes: Routes = [  
  { path: '', redirectTo: 'home', pathMatch: 'full'},  
  { path: 'home', component: HomeComponent },  
  { path: 'about', component: AboutComponent }, 
  { path: 'canvas', component: CanvasComponent }, 
  { path: 'graph', component: GraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
