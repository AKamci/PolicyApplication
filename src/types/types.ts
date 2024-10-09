// src/types/types.ts

export type EntityType = 'Customer' | 'CarPolicy';


export interface BaseEntity {
  id: number;
  type: EntityType;
}

export interface Customer extends BaseEntity {
  type: 'Customer';
  firstName: string;
  lastName: string;
  password: string;
}

export interface CarPolicy extends BaseEntity {
  type: 'CarPolicy';
  name: string;
  description: string;
  price: number;
}


export type Entity = Customer | CarPolicy;
