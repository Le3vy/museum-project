import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Ticket, tickets } from '../../shared/models/Ticket';
import { Exhibition, exhibitions } from '../../shared/models/Exhibition';
import { Purchase, purchases } from '../../shared/models/Purchase';
import { users } from '../../shared/models/User';

@Component({
  selector: 'app-ticket-purchase',
  templateUrl: './ticket-purchase.component.html',
  styleUrls: ['./ticket-purchase.component.scss'],
  standalone: true, 
  imports: [FormsModule]
})
export class TicketPurchaseComponent {
  tickets = tickets;
  exhibitions = exhibitions;
  selectedExhibition: number | null = null;
  selectedTicket: number | null = null;
  purchaseConfirmation = false;
  selectedTicketDetails?: Ticket;
  selectedExhibitionDetails?: Exhibition;

  purchaseTicket() {
    if (this.selectedTicket !== null && this.selectedExhibition !== null) {
      this.selectedTicketDetails = this.tickets.find(t => t.id === this.selectedTicket);
      this.selectedExhibitionDetails = this.exhibitions.find(e => e.id === this.selectedExhibition);

      // Mock user purchase (assuming the first user is logged in)
      const newPurchase: Purchase = {
        id: purchases.length + 1,
        ticket: this.selectedTicketDetails!,
        date: new Date(),
        user: users[0]
      };

      purchases.push(newPurchase);
      this.purchaseConfirmation = true;
    }
  }
}
