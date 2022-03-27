import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { SkyletIconComponent } from './skylet-icon.component';

@NgModule({
  imports: [CommonModule, TablerIconsModule.pick(TablerIcons)],
  declarations: [SkyletIconComponent],
  exports: [SkyletIconComponent, TablerIconsModule],
})
export class SkyletIconModule {}
