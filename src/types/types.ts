// src/types/types.ts

export type EntityType = 'User' | 'Product' | 'Category';


export interface BaseEntity {
  id: number;
  type: EntityType;
}

export interface User extends BaseEntity {
  type: 'User';
  firstName: string;
  lastName: string;
  password: string;
}

export interface Product extends BaseEntity {
  type: 'Product';
  name: string;
  description: string;
  price: number;
}

export interface Category extends BaseEntity {
  type: 'Category';
  name: string;
  description: string;
}

export type Entity = User | Product | Category;
