import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SkyletButtonModule } from 'skylet-ui-library';

import { AppHeaderComponent } from './components/app/header/header.component';
import { AppFooterComponent } from './components/app/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent],
  imports: [BrowserModule, AppRoutingModule, SkyletButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
