import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsAndReportsPage } from './forms-and-reports.page';

const routes: Routes = [
  {
    path: '',
    component: FormsAndReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsAndReportsPageRoutingModule {}
