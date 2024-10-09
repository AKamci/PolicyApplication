// src/components/CreateEntityForm.tsx
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import {createCustomer} from '../EntityService/CustomerService';
import {createCarPolicy} from '../EntityService/CarPolicyService';
import UserFormFields from '../FormFields/CustomerFormFields';
import CarPolicyFormFields from '../FormFields/CarPolicyFormFields';
import { CreateEntity, CreateEntityType } from '../types/TypesForCreate';
import { createCustomerEntity } from '../Prompts/CustomerPrompt'; // Import edilen dosya
import { createCarPolicyEntity } from '../Prompts/CarPolicyPrompt'; // CarPolicy için import

interface CreateEntityFormProps {
  entityType: CreateEntityType;
}

const CreateEntityForm: React.FC<CreateEntityFormProps> = ({ entityType }) => {
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

    let newEntity: CreateEntity | null;

    switch (entityType) {
      case 'CreateCustomer':
        newEntity = createCustomerEntity(formData); // Customer için çağırıyoruz
        if (!newEntity) return; 
        createCustomer(newEntity); 
        break;

      case 'CreateCarPolicy':
        newEntity = createCarPolicyEntity(formData); // CarPolicy için çağırıyoruz
        if (!newEntity) return; 
        createCarPolicy(newEntity); 
        break;

      default:
        alert('Geçersiz entity türü.');
        return;
    }

    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setFormData({});
  };

  const renderFormFields = () => {
    switch (entityType) {
      case 'CreateCustomer':
        return <UserFormFields formData={formData} onInputChange={handleInputChange} />;
      case 'CreateCarPolicy':
        return <CarPolicyFormFields formData={formData} onInputChange={handleInputChange} />;
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
