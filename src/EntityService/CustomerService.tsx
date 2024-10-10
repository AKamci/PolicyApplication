// src/services/userService.tsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Entity } from '../types/Types';
import { CreateCustomer } from '../types/TypesForCreate';
import CustomerFormFields from '../FormFields/CustomerFormFields';

// createCustomer fonksiyonunu yukarıda güncelledik.
export const createCustomer = async (customerData: CreateCustomer): Promise<void> => {
    console.log('Customer data received:', customerData);
    // Burada API isteği yapabilirsiniz
};

// fetchUsers fonksiyonunu güncelliyoruz.
export const fetchUsers = async (queryId: number): Promise<Entity[]> => {
    console.log("UserService is rendered.");
    let fetchedUsers: Entity[] = [];

    switch (queryId) {
        case 1:
            fetchedUsers = [ /* All users data */ ];
            break;
        case 2:
            console.log("Case 2: Form is being shown...");
            // createCustomer fonksiyonuna veriyi gönderme işini yapacağız
            showCustomerForm();
            break;
        case 3:
            fetchedUsers = [ /* Users' ages */ ];
            break;
        default:
            console.log("Something is being printed here");
            break;
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fetchedUsers);
        }, 1000); // Simulated wait time
    });
};

// Modal içerisinde formu göstermek için bir yöntem.
const showCustomerForm = () => {
    const handleFormSubmit = (data: CreateCustomer) => {
        createCustomer(data);  // Form verilerini createCustomer'a gönderiyoruz
    };

    return (
        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Create Customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomerFormFields onSubmit={handleFormSubmit} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => console.log('Modal closed')}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
