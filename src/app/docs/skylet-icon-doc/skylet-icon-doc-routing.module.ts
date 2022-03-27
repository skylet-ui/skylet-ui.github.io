import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkyletIconDocComponent } from './skylet-icon-doc.component';

const routes: Routes = [
  {
    path: '',
    component: SkyletIconDocComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkyletIconDocRoutingModule {}
