// src/components/ProductFormFields.tsx
import React from 'react';
import { Form } from 'react-bootstrap';

interface ProductFormFieldsProps {
  formData: {
    policyName: string;
    policyDescription: string;
    policyType: string;
    policyDate: string; // Tarih için string kullanımı; isterseniz Date türü de kullanabilirsiniz
    customerId: number; // Müşteri ID'si
  };
  onInputChange: (field: string, value: any) => void;
}

const CarPolicyFormFields: React.FC<ProductFormFieldsProps> = ({ formData, onInputChange }) => (
  <>
    <Form.Group controlId="formPolicyName" className="mb-3">
      <Form.Label>Poliçe Adı</Form.Label>
      <Form.Control
        type="text"
        placeholder="Poliçe adı girin"
        value={formData.policyName || ''}
        onChange={(e) => onInputChange('policyName', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formPolicyDescription" className="mb-3">
      <Form.Label>Açıklama</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Poliçe açıklaması girin"
        value={formData.policyDescription || ''}
        onChange={(e) => onInputChange('policyDescription', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formPolicyType" className="mb-3">
      <Form.Label>Poliçe Türü</Form.Label>
      <Form.Control
        type="text"
        placeholder="Poliçe türünü girin"
        value={formData.policyType || ''}
        onChange={(e) => onInputChange('policyType', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formPolicyDate" className="mb-3">
      <Form.Label>Poliçe Tarihi</Form.Label>
      <Form.Control
        type="date"
        placeholder="Poliçe tarihi seçin"
        value={formData.policyDate || ''}
        onChange={(e) => onInputChange('policyDate', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formCustomerId" className="mb-3">
      <Form.Label>Müşteri ID</Form.Label>
      <Form.Control
        type="number"
        placeholder="Müşteri ID'si girin"
        value={formData.customerId || 0}
        onChange={(e) => onInputChange('customerId', Number(e.target.value))}
        required
      />
    </Form.Group>
  </>
);

export default CarPolicyFormFields;
