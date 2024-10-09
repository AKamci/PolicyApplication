// src/components/CategoryFormFields.tsx
import React from 'react';
import { Form } from 'react-bootstrap';

interface CategoryFormFieldsProps {
  formData: {
    name: string;
    description: string;
  };
  onInputChange: (field: string, value: any) => void;
}

const CategoryFormFields: React.FC<CategoryFormFieldsProps> = ({ formData, onInputChange }) => (
  
  <>
    <Form.Group controlId="formCategoryName" className="mb-3">
      <Form.Label>Kategori Adı</Form.Label>
      <Form.Control
        type="text"
        placeholder="Kategori adı girin"
        value={formData.name || ''}
        onChange={(e) => onInputChange('name', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formCategoryDescription" className="mb-3">
      <Form.Label>Açıklama</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Kategori açıklaması girin"
        value={formData.description || ''}
        onChange={(e) => onInputChange('description', e.target.value)}
        required
      />
    </Form.Group>
  </>
);

export default CategoryFormFields;
