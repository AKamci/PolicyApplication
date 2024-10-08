// src/services/categoryService.ts
import { Entity } from '../types/types';

export const fetchCategories = async (queryId: number): Promise<Entity[]> => {
  let fetchedCategories: Entity[] = [];

  switch (queryId) {
    case 1:
      fetchedCategories = [ /* Tüm kategoriler verisi */ ];
      break;
    case 2:
      fetchedCategories = [ /* Alt kategoriler */ ];
      break;
    case 3:
      fetchedCategories = [ /* Popüler kategoriler */ ];
      break;
    // Diğer durumlar...
    default:
      break;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchedCategories);
    }, 1000); // Simülasyon için bekleme süresi
  });
};
