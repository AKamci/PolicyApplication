// src/components/EntityItem.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { Entity } from '../types/types';

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
      case 'User':
        return (
          <>
            <td>{entity.firstName}</td>
            <td>{entity.lastName}</td>
            <td>{entity.password}</td>
          </>
        );
      case 'Product':
        return (
          <>
            <td>{entity.name}</td>
            <td>{entity.description}</td>
            <td>{`${entity.price} TL`}</td>
          </>
        );
      case 'Category':
        return (
          <>
            <td>{entity.name}</td>
            <td>{entity.description}</td>
            <td>-</td>
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
