import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { Notfound } from './layout/notfound/notfound';
import { ListEvent } from './layout/list-event/list-event';

const routes: Routes = [
  {path: 'home' , component: Home },
  {path: 'list' , component: ListEvent},
  {path: '**' , component: Notfound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
