export type CreateEntityType = 'CreateCustomer' | 'CreateCarPolicy';


export interface BaseEntity {
  type: CreateEntityType;
}

export interface CreateCustomer extends BaseEntity {
  type: 'CreateCustomer';
  name: string;
  address: string;
  phone: string;
  password: string;
  email: string;
  age : number;
  gender: string;
}

export interface CreateCarPolicy extends BaseEntity {
  type: 'CreateCarPolicy';
  policyName: string;
  policyDescription: string;
  policyType: string;
  policyDate: Date;
  customerId: number;
}


export type CreateEntity = CreateCustomer | CreateCarPolicy;