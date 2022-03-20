import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderComponent } from '../../components/header/header.component';
import { AppFooterComponent } from '../../components/footer/footer.component';
import { ViewComponentsRoutingModule } from './view-components-routing.module';
import { ViewComponentsComponent } from './view-components.component';

@NgModule({
  declarations: [
    ViewComponentsComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [CommonModule, ViewComponentsRoutingModule],
  providers: [],
})
export class ViewComponentsModule {}
