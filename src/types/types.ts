// src/types/types.ts

export type EntityType = 'Customer' | 'CarPolicy';


export interface BaseEntity {
  id: number;
  type: EntityType;
}

export interface Customer extends BaseEntity {
  type: 'Customer';
  name: string;
  address: string;
  phone: string;
  email: string;
  age : number;
  gender: string;
}

export interface CarPolicy extends BaseEntity {
  type: 'CarPolicy';
  policyName: string;
  policyDescription: string;
  policyType: string;
  policyDate: Date;
  policyAmount: number;
  customerId: number;
}


export type Entity = Customer | CarPolicy;
