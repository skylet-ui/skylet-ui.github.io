import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponentsComponent } from './view-components.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewComponentsComponent,
  },
  {
    path: 'button',
    loadChildren: () =>
      import('../../docs/skylet-button-doc/skylet-button-doc.module').then(
        (m) => m.SkyletButtonDocModule
      ),
  },
  {
    path: 'icon',
    loadChildren: () =>
      import('../../docs/skylet-icon-doc/skylet-icon-doc.module').then(
        (m) => m.SkyletIconDocModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewComponentsRoutingModule {}
