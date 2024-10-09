// src/services/productService.ts
import { Entity } from '../types/Types';
import { promptProductForRequest } from '../Prompts/CarPolicyPrompt';

export const fetchProducts = async (queryId: number): Promise<Entity[]> => {
  console.log("ProductService is rendered.")
  let fetchedProducts: Entity[] = [];

  switch (queryId) {
    case 1:
      fetchedProducts = [ /* Tüm ürünler verisi */ ];
      break;
    case 2:
      const categoryDetails = await promptProductForRequest();
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
