// src/components/CreateEntityForm.tsx
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Entity, EntityType } from '../types/Types';
import UserFormFields from '../FormFields/CustomerFormFields';
import ProductFormFields from '../FormFields/CarPolicyFormFields';
import { createCustomer } from '../EntityService/CustomerService';

interface CreateEntityFormProps {
  entityType: EntityType;
  onCreate: (entity: Entity) => void;
}

const CreateEntityForm: React.FC<CreateEntityFormProps> = ({ entityType, onCreate }) => {
  console.log("CreateEntityForm is rendered.")
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
      case 'Customer':
        const { name, address, phone, email, password, age, gender } = formData;
        if (!name || !address || !phone || !email || !password || age <= 18 || !gender) {
          alert('Lütfen tüm alanları doldurun.');
          return;
        }
        newEntity = { name, address, phone, email, password, age, gender };
        break;

      case 'CarPolicy':
        const { name, description, price } = formData;
        if (!name || !description || price <= 0) {
          alert('Lütfen tüm alanları doğru doldurun.');
          return;
        }
        
        break;

      default:
        alert('Geçersiz entity türü.');
        return;
    }

    createCustomer(newEntity);
    onCreate(newEntity);
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setFormData({});
  };

  const renderFormFields = () => {
    switch (entityType) {
      case 'Customer':
        return <UserFormFields formData={formData} onInputChange={handleInputChange} />;
      case 'CarPolicy':
        return <ProductFormFields formData={formData} onInputChange={handleInputChange} />;
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
