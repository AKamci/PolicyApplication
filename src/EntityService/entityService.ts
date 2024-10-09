// src/services/entityService.ts
import { Entity, EntityType } from '../types/types';

// Genel verileri çekme fonksiyonu
export const fetchEntities = async (type: EntityType): Promise<Entity[]> => {
  console.log("entityService is rendered.")
  let fetchedEntities: Entity[] = [];

  switch (type) {
    case 'User':
      fetchedEntities = await fetchUsers();
      break;
    case 'Product':
      fetchedEntities = await fetchProducts();
      break;
    case 'Category':
      fetchedEntities = await fetchCategories();
      break;
    default:
      break;
  }

  return fetchedEntities;
};

// Kullanıcıları çeken fonksiyon
const fetchUsers = async (): Promise<Entity[]> => {
  const users: Entity[] = [
    { id: 1, type: 'User', firstName: 'Ali', lastName: 'Veli', password: '12345' },
    { id: 2, type: 'User', firstName: 'Ayşe', lastName: 'Fatma', password: '67890' },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000); // Simülasyon için bir bekleme süresi
  });
};

// Ürünleri çeken fonksiyon
const fetchProducts = async (): Promise<Entity[]> => {
  const products: Entity[] = [
    { id: 3, type: 'Product', name: 'Laptop', description: 'Yüksek performanslı laptop', price: 15000 },
    { id: 4, type: 'Product', name: 'Telefon', description: 'Akıllı telefon', price: 8000 },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // Simülasyon için bir bekleme süresi
  });
};

// Kategorileri çeken fonksiyon
const fetchCategories = async (): Promise<Entity[]> => {
  const categories: Entity[] = [
    { id: 5, type: 'Category', name: 'Elektronik', description: 'Elektronik ürünler' },
    { id: 6, type: 'Category', name: 'Giyim', description: 'Giyim ürünleri' },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000); // Simülasyon için bir bekleme süresi
  });
};

// Kategorilere göre farklı veri çekme fonksiyonları
export const fetchCategoriesData = async (queryId: number): Promise<Entity[]> => {
  switch (queryId) {
    case 1:
      return fetchAllCategories();
    case 2:
      return fetchSubCategories();
    case 3:
      return fetchPopularCategories();
    case 4:
      return fetchNewCategories();
    case 5:
      return fetchProductsByCategory();
    case 6:
      return fetchProductsUnderCategory();
    case 7:
      return fetchRelatedProductsByCategory();
    case 8:
      return fetchUsersByCategory();
    case 9:
      return fetchSalesByCategory();
    case 10:
      return fetchDiscountsByCategory();
    default:
      return [];
  }
};

// Tüm Kategorileri Getir
const fetchAllCategories = async (): Promise<Entity[]> => {
  const categories = await fetchCategories();
  return categories; // Daha önce tanımlanan kategorileri döndür
};

// Alt Kategorileri Getir
const fetchSubCategories = async (): Promise<Entity[]> => {
  // Buraya alt kategorileri getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Popüler Kategorileri Getir
const fetchPopularCategories = async (): Promise<Entity[]> => {
  // Buraya popüler kategorileri getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Yeni Kategorileri Getir
const fetchNewCategories = async (): Promise<Entity[]> => {
  // Buraya yeni kategorileri getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Kategorilere Göre Ürünleri Getir
const fetchProductsByCategory = async (): Promise<Entity[]> => {
  // Buraya kategorilere göre ürünleri getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Kategorilerin Altında Olan Ürünleri Getir
const fetchProductsUnderCategory = async (): Promise<Entity[]> => {
  // Buraya kategorilerin altında olan ürünleri getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Kategorilerin İlgili Ürünlerini Getir
const fetchRelatedProductsByCategory = async (): Promise<Entity[]> => {
  // Buraya kategorilerin ilgili ürünlerini getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Kategorilere Göre Kullanıcıları Getir
const fetchUsersByCategory = async (): Promise<Entity[]> => {
  // Buraya kategorilere göre kullanıcıları getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Kategorilere Göre Satışları Getir
const fetchSalesByCategory = async (): Promise<Entity[]> => {
  // Buraya kategorilere göre satışları getiren API çağrısı ekleyin
  return []; // Simülasyon
};

// Kategorilere Göre İndirimleri Getir
const fetchDiscountsByCategory = async (): Promise<Entity[]> => {
  // Buraya kategorilere göre indirimleri getiren API çağrısı ekleyin
  return []; // Simülasyon
};
