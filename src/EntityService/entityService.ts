// src/services/entityService.ts
import { Entity, EntityType } from '../types/types';

export const fetchEntities = async (type: EntityType): Promise<Entity[]> => {
  // Gerçek API çağrısı yapılabilir
  // Şu an için sahte veriler döndürüyoruz
  let fetchedEntities: Entity[] = [];

  switch (type) {
    case 'User':
      fetchedEntities = [
        { id: 1, type: 'User', firstName: 'Ali', lastName: 'Veli', password: '12345' },
        { id: 2, type: 'User', firstName: 'Ayşe', lastName: 'Fatma', password: '67890' },
      ];
      break;
    case 'Product':
      fetchedEntities = [
        { id: 3, type: 'Product', name: 'Laptop', description: 'Yüksek performanslı laptop', price: 15000 },
        { id: 4, type: 'Product', name: 'Telefon', description: 'Akıllı telefon', price: 8000 },
      ];
      break;
    case 'Category':
      fetchedEntities = [
        { id: 5, type: 'Category', name: 'Elektronik', description: 'Elektronik ürünler' },
        { id: 6, type: 'Category', name: 'Giyim', description: 'Giyim ürünleri' },
      ];
      break;
    default:
      break;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchedEntities);
    }, 1000); // Simülasyon için bir bekleme süresi
  });
};
