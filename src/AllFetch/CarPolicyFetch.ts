// src/AllFetch/ProductFetch.ts
import { fetchProducts } from '../EntityService/CarPolicyService';
import { Entity } from '../types/types';

export const productFetchOptions: string[] = [
  "Ürünleri Getir (1) - Tüm ürünler",
  "Yeni Ürünleri Getir (2)",
  "Test Data",
];

export const getProductData = async (queryId: number): Promise<Entity[]> => {
  return await fetchProducts(queryId);
};
