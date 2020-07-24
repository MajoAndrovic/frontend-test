import { Component, OnInit } from '@angular/core';

import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];
  foundInvoices: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoices = this.invoiceService.generateInvoices();
    this.foundInvoices = this.invoices;
  }

  invoiceState(invoice: Invoice): string {
    return this.isInvoicePaid(invoice) ? 'zaplatena' : 'vytvorena';
  }

  isInvoicePaid(invoice: Invoice): boolean {
    return invoice.price > 0.5;
  }

  getPaidCount(): number {
    return this.foundInvoices.filter((invoice) => this.isInvoicePaid(invoice)).length;
  }

  getUnpaidCount(): number {
    return this.foundInvoices.filter((invoice) => !this.isInvoicePaid(invoice)).length;
  }

  onSearchInput(searchText: string) {
    if (searchText.length > 1) {
      this.foundInvoices = this.invoices.filter((i) => i.name.includes(searchText));
    } else {
      this.foundInvoices = this.invoices;
    }
  }

  onAddClick(invoiceName: string) {
    this.invoices.splice(0, 0, { name: invoiceName, price: this.invoiceService.getRandomPrice() });
  }
}
