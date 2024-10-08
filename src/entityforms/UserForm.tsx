// src/components/UserForm.tsx
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface UserFormProps {
  onSubmit: (user: { firstName: string; lastName: string; password: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ firstName: '', lastName: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.firstName.trim() && userData.lastName.trim() && userData.password.trim()) {
      onSubmit(userData);
      setUserData({ firstName: '', lastName: '', password: '' });
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <button type="submit" className="btn btn-primary">Oluştur</button>
    </Form>
  );
};

export default UserForm;
