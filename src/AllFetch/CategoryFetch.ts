// src/AllFetch/ProductFetch.ts
import { fetchCategories } from '../EntityService/CategoryService';
import { Entity } from '../types/types';

export const categoryFetchOptions: string[] = [
  "Ürünleri Getir (1) - Tüm ürünler",
  "Yeni Ürünleri Getir (2)",
  "Test Data",
];

export const getCategoryData = async (queryId: number): Promise<Entity[]> => {
  return await fetchCategories(queryId);
};
