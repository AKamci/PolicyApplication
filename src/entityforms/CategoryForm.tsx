// src/components/CategoryForm.tsx
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface CategoryFormProps {
  onSubmit: (category: { name: string; description: string }) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit }) => {
  console.log("CategoryForm is rendered.")
  const [categoryData, setCategoryData] = useState({ name: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryData.name.trim() && categoryData.description.trim()) {
      onSubmit(categoryData);
      setCategoryData({ name: '', description: '' });
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCategoryName" className="mb-3">
        <Form.Label>Kategori Adı</Form.Label>
        <Form.Control
          type="text"
          placeholder="Kategori adı girin"
          value={categoryData.name}
          onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group controlId="formCategoryDescription" className="mb-3">
        <Form.Label>Açıklama</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Kategori açıklaması girin"
          value={categoryData.description}
          onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })}
          required
        />
      </Form.Group>

      <button type="submit" className="btn btn-primary">Oluştur</button>
    </Form>
  );
};

export default CategoryForm;
