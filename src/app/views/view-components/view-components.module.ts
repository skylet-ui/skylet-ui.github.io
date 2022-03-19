import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewComponentsRoutingModule } from './view-components-routing.module';
import { ViewComponentsComponent } from './view-components.component';

@NgModule({
  declarations: [ViewComponentsComponent],
  imports: [CommonModule, ViewComponentsRoutingModule],
  providers: [],
})
export class ViewComponentsModule {}
