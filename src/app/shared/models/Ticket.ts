import { Exhibition, exhibitions} from "./Exhibition";

export type TicketType = 'Normal' | 'Student' | 'Daily Pass' | 'Daily Ticket';

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
    type: 'Normal',
    price: 3000,
    includesAllExhibitions: false,
    validForSpecificExhibition: exhibitions[0],
    validForMuseum: true
  },
  {
    id: 2,
    type: 'Student',
    price: 1500,
    includesAllExhibitions: false,
    validForSpecificExhibition: exhibitions[1],
    validForMuseum: true
  },
  {
    id: 3,
    type: 'Daily Pass',
    price: 5000,
    includesAllExhibitions: true,
    validForMuseum: true
  },
  {
    id: 4,
    type: 'Daily Ticket',
    price: 3500,
    includesAllExhibitions: true,
    validForMuseum: true
  }
];
