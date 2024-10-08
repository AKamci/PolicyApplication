// src/CreateEntity.tsx
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Entity, EntityType } from '../types/types';
import UserForm from '../entityforms/UserForm';
import ProductForm from '../entityforms/ProductForm';
import CategoryForm from '../entityforms/CategoryForm';

interface CreateEntityProps {
  onCreate: (entity: Entity) => void;
}

const CreateEntity: React.FC<CreateEntityProps> = ({ onCreate }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [entityType, setEntityType] = useState<EntityType>('User');

  const handleSubmit = (data: any) => {
    const newEntity: Entity = { id: Date.now(), type: entityType, ...data };
    onCreate(newEntity);
    handleClose();
  };

  const renderForm = () => {
    switch (entityType) {
      case 'User':
        return <UserForm onSubmit={handleSubmit} />;
      case 'Product':
        return <ProductForm onSubmit={handleSubmit} />;
      case 'Category':
        return <CategoryForm onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mb-4">
        Create Entity
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Yeni Entity Oluştur</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formEntityType" className="mb-3">
              <Form.Label>Entity Türü</Form.Label>
              <Form.Select
                value={entityType}
                onChange={(e) => setEntityType(e.target.value as EntityType)}
                required
              >
                <option value="User">User</option>
                <option value="Product">Product</option>
                <option value="Category">Category</option>
              </Form.Select>
            </Form.Group>
            {renderForm()}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button variant="primary" onClick={() => handleSubmit({})}>
              Oluştur
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateEntity;
