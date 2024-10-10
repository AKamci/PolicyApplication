// CreateCarPolicyForm.tsx
import React, { useState } from 'react';
import { CreateCarPolicy } from '../types/TypesForCreate';
import { fetchProducts } from '../EntityService/CarPolicyService'; 

const CreateCarPolicyForm: React.FC = () => {
  const [formData, setFormData] = useState<CreateCarPolicy>({
    type: 'CreateCarPolicy',
    policyName: '',
    policyDescription: '',
    policyType: '',
    policyDate: new Date(),
    customerId: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'policyDate' ? new Date(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log(JSON.stringify(formData, null, 2));

    await fetchProducts(2, formData);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        Policy Name:
        <input
          type="text"
          name="policyName"
          value={formData.policyName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Policy Description:
        <textarea
          name="policyDescription"
          value={formData.policyDescription}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Policy Type:
        <input
          type="text"
          name="policyType"
          value={formData.policyType}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Policy Date:
        <input
          type="date"
          name="policyDate"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Customer ID:
        <input
          type="number"
          name="customerId"
          value={formData.customerId}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateCarPolicyForm;
