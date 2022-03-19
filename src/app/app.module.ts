import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SkyletButtonModule } from 'skylet-ui-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SkyletButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
