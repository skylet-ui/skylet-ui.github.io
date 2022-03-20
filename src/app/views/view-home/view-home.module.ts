import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyletButtonModule } from 'skylet-ui-library';

import { ViewHomeRoutingModule } from './view-home-routing.module';
import { ViewHomeComponent } from './view-home.component';

@NgModule({
  declarations: [ViewHomeComponent],
  imports: [CommonModule, ViewHomeRoutingModule, SkyletButtonModule],
  providers: [],
})
export class ViewHomeModule {}
