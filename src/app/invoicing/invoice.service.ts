import { Injectable } from '@angular/core';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  generateInvoices(): Invoice[] {
    const arrayLength = 300;
    const invoices = new Array<Invoice>(arrayLength);
    for (let i = 0; i < arrayLength; i++) {
      invoices[i] = {name: this.getRandomName(), price: this.getRandomPrice()};
    }
    return invoices;
  }

  private getRandomName(): string {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result = result + charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
  }

  getRandomPrice(): number {
    return Math.round(Math.random() * 10) / 10;
  }
}
