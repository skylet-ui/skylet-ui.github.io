import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkyletIconModule } from 'skylet-ui-library';

import { SkyletIconDocRoutingModule } from './skylet-icon-doc-routing.module';
import { SkyletIconDocComponent } from './skylet-icon-doc.component';

@NgModule({
  declarations: [SkyletIconDocComponent],
  imports: [CommonModule, SkyletIconDocRoutingModule, SkyletIconModule],
  schemas: [],
  providers: [],
})
export class SkyletIconDocModule {}
