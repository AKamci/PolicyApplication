// src/FormFields/CustomerFormFields.tsx
import React, { useState } from 'react';
import { CreateCustomer } from '../types/TypesForCreate';

interface Props {
    onSubmit: (data: CreateCustomer) => void;
}

const CustomerFormFields: React.FC<Props> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<CreateCustomer>({
        type: 'CreateCustomer',
        name: '',
        address: '',
        phone: '',
        password: '',
        email: '',
        age: 0,
        gender: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <input type="text" className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CustomerFormFields;
