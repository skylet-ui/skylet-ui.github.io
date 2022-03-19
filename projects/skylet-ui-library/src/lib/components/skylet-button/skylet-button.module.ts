import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyletButtonComponent } from './skylet-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SkyletButtonComponent],
  exports: [SkyletButtonComponent],
})
export class SkyletButtonModule {}
