// src/services/productService.ts
import { Entity } from '../types/types';
import { CreateCarPolicy } from '../types/TypesForCreate';



export const createCarPolicy = (customer: CreateCarPolicy): void => {

  console.log("Müşteri oluşturuldu:", customer);

};

export const fetchProducts = async (queryId: number): Promise<Entity[]> => {
  console.log("ProductService is rendered.")
  let fetchedProducts: Entity[] = [];

  switch (queryId) {
    case 1:
      fetchedProducts = [ /* Tüm ürünler verisi */ ];
      break;
    case 2:
      fetchedProducts = [ /* Yeni ürünler */ ];
      break;
    case 3:
      fetchedProducts = [ /* İndirimli ürünler */ ];
      break;
    // Diğer durumlar...
    default:
      break;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchedProducts);
    }, 1000); // Simülasyon için bekleme süresi
  });
};
