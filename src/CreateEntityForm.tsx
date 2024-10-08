// src/components/CreateEntityForm.tsx
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Entity, EntityType, User, Product, Category } from './types';

interface CreateEntityFormProps {
  entityType: EntityType;
  onCreate: (entity: Entity) => void;
}

const CreateEntityForm: React.FC<CreateEntityFormProps> = ({ entityType, onCreate }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    resetForm();
  };
  const handleShow = () => setShow(true);

  // Form alanları için state
  const [userData, setUserData] = useState<{ firstName: string; lastName: string; password: string }>({
    firstName: '',
    lastName: '',
    password: '',
  });

  const [productData, setProductData] = useState<{ name: string; description: string; price: number }>({
    name: '',
    description: '',
    price: 0,
  });

  const [categoryData, setCategoryData] = useState<{ name: string; description: string }>({
    name: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newEntity: Entity;

    switch (entityType) {
      case 'User':
        const { firstName, lastName, password } = userData;
        if (firstName.trim() === '' || lastName.trim() === '' || password.trim() === '') {
          alert('Lütfen tüm alanları doldurun.');
          return;
        }
        newEntity = {
          id: Date.now(),
          type: 'User',
          firstName,
          lastName,
          password,
        };
        break;

      case 'Product':
        const { name, description, price } = productData;
        if (name.trim() === '' || description.trim() === '' || price <= 0) {
          alert('Lütfen tüm alanları doğru doldurun.');
          return;
        }
        newEntity = {
          id: Date.now(),
          type: 'Product',
          name,
          description,
          price,
        };
        break;

      case 'Category':
        const { name: catName, description: catDescription } = categoryData;
        if (catName.trim() === '' || catDescription.trim() === '') {
          alert('Lütfen tüm alanları doldurun.');
          return;
        }
        newEntity = {
          id: Date.now(),
          type: 'Category',
          name: catName,
          description: catDescription,
        };
        break;

      default:
        alert('Geçersiz entity türü.');
        return;
    }

    onCreate(newEntity);
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setUserData({ firstName: '', lastName: '', password: '' });
    setProductData({ name: '', description: '', price: 0 });
    setCategoryData({ name: '', description: '' });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mb-4">
        {`Create ${entityType}`}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{`Yeni ${entityType} Oluştur`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {entityType === 'User' && (
              <>
                <Form.Group controlId="formFirstName" className="mb-3">
                  <Form.Label>İsim</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="İsim girin"
                    value={userData.firstName}
                    onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formLastName" className="mb-3">
                  <Form.Label>Soyisim</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Soyisim girin"
                    value={userData.lastName}
                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Şifre girin"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    required
                  />
                </Form.Group>
              </>
            )}

            {entityType === 'Product' && (
              <>
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
              </>
            )}

            {entityType === 'Category' && (
              <>
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
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button variant="primary" type="submit">
              Oluştur
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateEntityForm;
