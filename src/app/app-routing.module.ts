import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/view-home/view-home.module').then(
        (m) => m.ViewHomeModule
      ),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./views/view-components/view-components.module').then(
        (m) => m.ViewComponentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
