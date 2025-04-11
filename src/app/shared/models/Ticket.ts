import { Exhibition } from "./Exhibition";

export type TicketType = 'Normál' | 'Diák' | 'Napi Bérlet' | 'Napi Jegy';

export interface Ticket {
  id: number;
  type: TicketType;
  price: number;
  includesAllExhibitions: boolean;
  validForSpecificExhibition?: Exhibition;
  validForMuseum: boolean;
}