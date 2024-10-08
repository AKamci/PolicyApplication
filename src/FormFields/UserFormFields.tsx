// src/components/UserFormFields.tsx
import React from 'react';
import { Form } from 'react-bootstrap';

interface UserFormFieldsProps {
  formData: {
    firstName: string;
    lastName: string;
    password: string;
  };
  onInputChange: (field: string, value: any) => void;
}

const UserFormFields: React.FC<UserFormFieldsProps> = ({ formData, onInputChange }) => (
  <>
    <Form.Group controlId="formFirstName" className="mb-3">
      <Form.Label>İsim</Form.Label>
      <Form.Control
        type="text"
        placeholder="İsim girin"
        value={formData.firstName || ''}
        onChange={(e) => onInputChange('firstName', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formLastName" className="mb-3">
      <Form.Label>Soyisim</Form.Label>
      <Form.Control
        type="text"
        placeholder="Soyisim girin"
        value={formData.lastName || ''}
        onChange={(e) => onInputChange('lastName', e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formPassword" className="mb-3">
      <Form.Label>Şifre</Form.Label>
      <Form.Control
        type="password"
        placeholder="Şifre girin"
        value={formData.password || ''}
        onChange={(e) => onInputChange('password', e.target.value)}
        required
      />
    </Form.Group>
  </>
);

export default UserFormFields;
