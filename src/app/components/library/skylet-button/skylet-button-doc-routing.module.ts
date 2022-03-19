import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkyletButtonDocComponent } from './skylet-button-doc.component';

const routes: Routes = [
  {
    path: '',
    component: SkyletButtonDocComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkyletButtonDocRoutingModule {}
