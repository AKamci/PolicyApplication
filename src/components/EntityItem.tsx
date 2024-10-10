// src/components/EntityItem.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { Entity } from '../types/Types';

interface EntityItemProps {
  entity: Entity;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onView: (id: number) => void;
}

const EntityItem: React.FC<EntityItemProps> = ({ entity, onDelete, onEdit, onView }) => {
  console.log("EntityItem is rendered.")
  const renderEntityDetails = () => {
    switch (entity.type) {
      case 'Customer':
        return (
          <>
            <td>{entity.id}</td>
            <td>{entity.name}</td>
            <td>{entity.email}</td>
          </>
        );
      case 'CarPolicy':
        return (
          <>
            <td>{entity.id}</td>
            <td>{entity.customerId}</td>
            <td>{entity.policyName}</td>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <tr>
      <td>{entity.type}</td>
      {renderEntityDetails()}
      <td className="text-center">
        <Button
          variant="info"
          size="sm"
          className="me-2"
          onClick={() => onView(entity.id)}
        >
          View
        </Button>
        <Button
          variant="warning"
          size="sm"
          className="me-2"
          onClick={() => onEdit(entity.id)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(entity.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default EntityItem;
