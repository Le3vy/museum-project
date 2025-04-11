import { Purchase } from "./Purchase";

export interface User {
    name: {
      firstname: string;
      lastname: string;
    };
    email: string;
    password: string;
    Purchases: Purchase[];
  }