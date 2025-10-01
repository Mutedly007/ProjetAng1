import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Notfound } from './layout/notfound/notfound';
import { Home } from './layout/home/home';
import { Databinding } from './databinding/databinding';
import { ListEvent } from './layout/list-event/list-event';


@NgModule({
  declarations: [
    App,
    Footer,
    Header,
    Notfound,
    Home,
    Databinding,
    ListEvent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
