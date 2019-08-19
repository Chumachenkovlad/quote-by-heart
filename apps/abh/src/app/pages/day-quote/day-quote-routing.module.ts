import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayQuoteComponent } from './day-quote/day-quote.component';


const routes: Routes = [
  {
    path: '',
    component: DayQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayQuoteRoutingModule { }
