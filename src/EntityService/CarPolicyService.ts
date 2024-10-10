// src/services/productService.ts
import { Entity } from '../types/types';
import { CreateCarPolicy, CreateEntity } from '../types/TypesForCreate';

export const createCarPolicy = (customer: CreateCarPolicy): void => {
  
  const jsonData = JSON.stringify(customer, null, 2);
  console.log("Müşteri oluşturuldu:", jsonData);
};




export const fetchProducts = async (queryId: number, customerData?: CreateCarPolicy): Promise<Entity[] | Promise<CreateEntity[]>> => {
  console.log("ProductService is rendered.");
  let fetchedProducts: Entity[] = [];

  switch (queryId) {
    case 1:
      fetchedProducts = [ /* Tüm ürünler verisi */ ];
      break;
      
    case 2:
      

      
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
