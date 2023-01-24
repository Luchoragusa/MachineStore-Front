export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password?: string;
    idRole: number;
    roleName: string;
    image?: string;
    registro: string;
    createdAt: Date;
    updatedAt: Date;
  }