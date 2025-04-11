import { Exhibition, exhibitions} from "./Exhibition";

export type TicketType = 'Normál' | 'Diák' | 'Napi Bérlet' | 'Napi Jegy';

export interface Ticket {
  id: number;
  type: TicketType;
  price: number;
  includesAllExhibitions: boolean;
  validForSpecificExhibition?: Exhibition;
  validForMuseum: boolean;
}

export const tickets: Ticket[] = [
  {
    id: 1,
    type: 'Normál',
    price: 3000,
    includesAllExhibitions: false,
    validForSpecificExhibition: exhibitions[0],
    validForMuseum: true
  },
  {
    id: 2,
    type: 'Diák',
    price: 1500,
    includesAllExhibitions: false,
    validForSpecificExhibition: exhibitions[1],
    validForMuseum: true
  },
  {
    id: 3,
    type: 'Napi Bérlet',
    price: 5000,
    includesAllExhibitions: true,
    validForMuseum: true
  },
  {
    id: 4,
    type: 'Napi Jegy',
    price: 3500,
    includesAllExhibitions: true,
    validForMuseum: true
  }
];
