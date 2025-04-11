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

export const exhibitions: Exhibition[] = [
  {
    id: 1,
    name: 'Ancient Egypt',
    description: 'Explore the wonders of Ancient Egyptian civilization.',
    imageUrl: 'images/aegypt.png',
    availableTickets: [],
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-06-01'),
  },
  {
    id: 2,
    name: 'Medieval Europe',
    description: 'Dive into the medieval period of European history.',
    imageUrl: 'images/meurope.png',
    availableTickets: [],
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-07-01'),
  },
  {
    id: 3,
    name: 'Industrial Revolution',
    description: 'Experience the innovations of the Industrial Revolution.',
    imageUrl: 'images/irevolution.png',
    availableTickets: [],
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-08-01'),
  },
  {
    id: 4,
    name: 'World War History',
    description: 'Discover the key events of the world wars.',
    imageUrl: 'images/ww2.png',
    availableTickets: [],
    startDate: new Date('2025-04-01'),
    endDate: new Date('2025-09-01'),
  }
];
