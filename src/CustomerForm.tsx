import React from 'react';
import CustomerFormFields from './FormFields/CustomerFormFields';
import { CreateCustomer } from './types/TypesForCreate';

const CustomerForm: React.FC = () => {
    const handleCustomerSubmit = (data: CreateCustomer) => {
        // Gelen form verilerini işleyebiliriz, şimdilik konsola yazıyoruz
        console.log('Form Data:', data);
        // Burada API isteği yapabilir veya başka işlemler yapabilirsiniz
    };

    return (
        <div className="container mt-5">
            <h2>Create Customer Form</h2>
            <CustomerFormFields onSubmit={handleCustomerSubmit} />
        </div>
    );
};

export default CustomerForm;
