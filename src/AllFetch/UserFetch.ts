// src/AllFetch/UserFetch.ts
import { fetchUsers } from '../EntityService/UserService';
import { Entity } from '../types/types';

export const userFetchOptions: string[] = [
  "Kullanıcıları Getir (1) - Tüm kullanıcılar",
  "Kullanıcıların Köpeklerini Getir (2)",
  "Kullanıcıların Yaşlarını Getir (3)",
  "fsfsadsadsadsadsad",
  "sfsafadadsadsadsad",
  "fsfsadsadsadsadsad",
  "sfsafadadsadsadsad",
  // Diğer seçenekler...
];

export const getUserData = async (queryId: number): Promise<Entity[]> => {
  return await fetchUsers(queryId);
};
