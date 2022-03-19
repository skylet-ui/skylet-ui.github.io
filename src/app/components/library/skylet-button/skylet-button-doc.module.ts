import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkyletButtonModule } from 'skylet-ui-library';

import { SkyletButtonDocRoutingModule } from './skylet-button-doc-routing.module';
import { SkyletButtonDocComponent } from './skylet-button-doc.component';

@NgModule({
  declarations: [SkyletButtonDocComponent],
  imports: [CommonModule, SkyletButtonDocRoutingModule, SkyletButtonModule],
  schemas: [],
  providers: [],
})
export class SkyletButtonDocModule {}
