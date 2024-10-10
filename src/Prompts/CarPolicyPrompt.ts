// src/Prompts/CarPolicyPrompt.ts

import { CreateCarPolicy } from '../types/TypesForCreate';

export const createCarPolicyEntity = (data: any): CreateCarPolicy | null => {
  console.log("CarPolicyPrompt is rendered.")
  const { policyName, policyDescription, policyType, policyDate, customerId } = data;

  if (!policyName || !policyDescription || !policyType || !policyDate || customerId <= 0) {
    alert('Lütfen tüm alanları doğru doldurun.');
    return null;
  }

  return {
    type: 'CreateCarPolicy',
    policyName,
    policyDescription,
    policyType,
    policyDate,
    customerId,
  };
};
