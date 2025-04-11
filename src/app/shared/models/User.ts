export interface User {
    name: {
      firstname: string;
      lastname: string;
    };
    email: string;
    password: string;
  }

export const users: User[]=[
  {
    name: {
    firstname: 'Alice',
    lastname: 'Johnson'
    },
    email: 'test@gmail.com',
    password: 'testpw'
  }
]