import { Ticket } from "./Ticket";

export interface Exhibition {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    availableTickets: Ticket[];
    startDate: Date;
    endDate: Date;
  }