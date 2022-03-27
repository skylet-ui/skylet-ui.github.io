import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SkyletButtonModule, SkyletIconModule } from 'skylet-ui-library';

import { AppHeaderComponent } from './components/header/header.component';
import { AppFooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkyletButtonModule,
    SkyletIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
