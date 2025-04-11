import { Ticket, tickets } from "./Ticket";
import { User, users } from "./User";

export interface Purchase {
    id: number; 
    ticket: Ticket;
    date: Date;
    user: User;
}

export const purchases: Purchase[]=[
  {
    id: 1,
    ticket: tickets[0],
    date: new Date('2024-06-12'),
    user: users[0]
  },
  {
    id: 2,
    ticket: tickets[2],
    date: new Date('2024-07-01'),
    user: users[0]
  },
  {
    id: 3,
    ticket: tickets[1],
    date: new Date('2024-08-05'),
    user: users[0]
  }  

]