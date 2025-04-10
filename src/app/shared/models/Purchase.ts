import { Exhibition } from "./Exhibition";
import { Ticket } from "./Ticket";

export interface Purchase {
    ticket: Ticket;
    exhibition?: Exhibition;
    date: Date;
  }