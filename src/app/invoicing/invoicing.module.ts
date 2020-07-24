import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceRoutingModule } from './invoice-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ],
  declarations: [
    InvoiceListComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    InvoiceListComponent
  ]
})
export class InvoicingModule { }
