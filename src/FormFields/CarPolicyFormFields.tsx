// src/components/ProductFormFields.tsx
import React from 'react';
import { Form } from 'react-bootstrap';

interface ProductFormFieldsProps {
  formData: {
    name: string;
    description: string;
    price: number;
  };
  onInputChange: (field: string, value: any) => void;
}

const ProductFormFields: React.FC<ProductFormFieldsProps> = ({ formData, onInputChange }) => (
  <>
    <Form.Group controlId="formProductName" className="mb-3">
      <Form.Label>Ürün Adı</Form.Label>
      <Form.Control
        type="text"
        placeholder="Ürün adı girin"
        value={formData.name || ''}
        onChange={(e) => onInputChange('name', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formProductDescription" className="mb-3">
      <Form.Label>Açıklama</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Ürün açıklaması girin"
        value={formData.description || ''}
        onChange={(e) => onInputChange('description', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formProductPrice" className="mb-3">
      <Form.Label>Fiyat</Form.Label>
      <Form.Control
        type="number"
        placeholder="Fiyat girin"
        value={formData.price || 0}
        onChange={(e) => onInputChange('price', Number(e.target.value))}
        required
      />
    </Form.Group>
  </>
);

export default ProductFormFields;
