// src/components/ProductForm.tsx
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface ProductFormProps {
  onSubmit: (product: { name: string; description: string; price: number }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  console.log("ProductForm is rendered.")
  const [productData, setProductData] = useState({ name: '', description: '', price: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productData.name.trim() && productData.description.trim() && productData.price > 0) {
      onSubmit(productData);
      setProductData({ name: '', description: '', price: 0 });
    } else {
      alert('Lütfen tüm alanları doğru doldurun.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProductName" className="mb-3">
        <Form.Label>Ürün Adı</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün adı girin"
          value={productData.name}
          onChange={(e) => setProductData({ ...productData, name: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProductDescription" className="mb-3">
        <Form.Label>Açıklama</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Ürün açıklaması girin"
          value={productData.description}
          onChange={(e) => setProductData({ ...productData, description: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProductPrice" className="mb-3">
        <Form.Label>Fiyat</Form.Label>
        <Form.Control
          type="number"
          placeholder="Fiyat girin"
          value={productData.price}
          onChange={(e) => setProductData({ ...productData, price: Number(e.target.value) })}
          required
        />
      </Form.Group>

      <button type="submit" className="btn btn-primary">Oluştur</button>
    </Form>
  );
};

export default ProductForm;
