// src/components/CreateEntityForm.tsx
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Entity, EntityType } from '../types/types';
import UserFormFields from '../FormFields/UserFormFields';
import ProductFormFields from '../FormFields/ProductFormFields';
import CategoryFormFields from '../FormFields/CategoryFormFields';

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

  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newEntity: Entity;

    switch (entityType) {
      case 'User':
        const { firstName, lastName, password } = formData;
        if (!firstName || !lastName || !password) {
          alert('Lütfen tüm alanları doldurun.');
          return;
        }
        newEntity = { id: Date.now(), type: 'User', firstName, lastName, password };
        break;

      case 'Product':
        const { name, description, price } = formData;
        if (!name || !description || price <= 0) {
          alert('Lütfen tüm alanları doğru doldurun.');
          return;
        }
        newEntity = { id: Date.now(), type: 'Product', name, description, price };
        break;

      case 'Category':
        const { catName, catDescription } = formData;
        if (!catName || !catDescription) {
          alert('Lütfen tüm alanları doldurun.');
          return;
        }
        newEntity = { id: Date.now(), type: 'Category', name: catName, description: catDescription };
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
    setFormData({});
  };

  const renderFormFields = () => {
    switch (entityType) {
      case 'User':
        return <UserFormFields formData={formData} onInputChange={handleInputChange} />;
      case 'Product':
        return <ProductFormFields formData={formData} onInputChange={handleInputChange} />;
      case 'Category':
        return <CategoryFormFields formData={formData} onInputChange={handleInputChange} />;
      default:
        return null;
    }
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
          <Modal.Body>{renderFormFields()}</Modal.Body>
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
