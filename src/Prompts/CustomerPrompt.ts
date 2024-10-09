// src/Prompts/CustomerPrompt.ts

import { CreateCustomer } from '../types/TypesForCreate';

export const createCustomerEntity = (data: any): CreateCustomer | null => {
  const { name: customerName, address, phone, email, password, age, gender } = data;

  if (!customerName || !address || !phone || !email || !password || age <= 18 || !gender) {
    alert('Lütfen tüm alanları doldurun.');
    return null; // Hatalı giriş durumunda null döner
  }

  return {
    type: 'CreateCustomer',
    name: customerName,
    address,
    phone,
    email,
    password,
    age,
    gender,
  };
};
