// src/services/userService.ts
import { Entity } from '../types/Types';
import { CreateCustomer } from '../types/TypesForCreate';
import { showFormAndGetData } from '../FormFields/CustomerFormFields'; // Form fonksiyonunu başka dosyadan çağırıyoruz

export const createCustomer = (customer: CreateCustomer): void => {
  console.log("Müşteri oluşturuldu:", customer);
};

export const fetchUsers = async (queryId: number): Promise<Entity[]> => {
  console.log("UserService is rendered.");
  let fetchedUsers: Entity[] = [];

  switch (queryId) {
    case 1:
      fetchedUsers = [ /* Tüm kullanıcılar verisi */ ];
      break;
    case 2:
      console.log("Case 2: Form gösteriliyor...");
      const formData = await showFormAndGetData(); // Form fonksiyonunu çağırıyoruz
      console.log("Formdan gelen veri:", formData);
      createCustomer(formData); // Müşteri oluşturma fonksiyonuna gönderiyoruz
      break;
    case 3:
      fetchedUsers = [ /* Kullanıcıların yaşları */ ];
      break;
    // Diğer durumlar...
    default:
      console.log("BURAYA BİR ŞEY BASILDI");
      break;
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchedUsers);
    }, 1000); // Simülasyon için bekleme süresi
  });
};
