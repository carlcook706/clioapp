import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsAndReportsPageRoutingModule } from './forms-and-reports-routing.module';

import { FormsAndReportsPage } from './forms-and-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsAndReportsPageRoutingModule
  ],
  declarations: [FormsAndReportsPage]
})
export class FormsAndReportsPageModule {}
