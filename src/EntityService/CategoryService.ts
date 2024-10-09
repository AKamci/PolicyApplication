// src/services/categoryService.ts
import { Entity } from '../types/types';
import { promptCategoryForRequest } from '../Prompts/CategoryPrompt';

export const fetchCategories = async (queryId: number): Promise<Entity[]> => {
  console.log("CategoryService is rendered.");
  let fetchedCategories: Entity[] = [];

  switch (queryId) {
    case 1:
      fetchedCategories = [ /* Tüm kategoriler verisi */ ];
      break;
    case 2:
      // Kullanıcıdan kategori detaylarını isteyin
      const categoryDetails = await promptCategoryForRequest();
      // Alınan bilgileri kullanarak yeni bir kategori oluşturun
      const newCategory: Entity = {
        id: Date.now(), // veya başka bir ID oluşturma mantığı
        type: 'Category',
        name: categoryDetails.name,
        description: categoryDetails.description,
      };
      fetchedCategories.push(newCategory); // Yeni kategori eklenebilir
      console.log("Yeni kategori eklendi:", newCategory);
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
