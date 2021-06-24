import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeCardComponent } from './time-card/time-card.component';
import { HomeComponent } from './UI/home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"timecard", component:TimeCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
