// src/services/userService.ts
import { Entity } from '../types/types';

export const fetchUsers = async (queryId: number): Promise<Entity[]> => {
  let fetchedUsers: Entity[] = [];

  switch (queryId) {
    case 1:
      fetchedUsers = [ /* Tüm kullanıcılar verisi */ ];
      break;
    case 2:
      fetchedUsers = [ /* Kullanıcıların köpekleri */ ];
      break;
    case 3:
      fetchedUsers = [ /* Kullanıcıların yaşları */ ];
      break;
    // Diğer durumlar...
    default:
        console.log("BURAYA BİR ŞEY BASILDI")   

      break;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchedUsers);
    }, 1000); // Simülasyon için bekleme süresi
  });
};
