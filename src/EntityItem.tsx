// src/components/EntityItem.tsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { Entity } from './types';

interface EntityItemProps {
  entity: Entity;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onView: (id: number) => void;
}

const EntityItem: React.FC<EntityItemProps> = ({ entity, onDelete, onEdit, onView }) => {
  return (
    <tr>
      <td>{entity.type}</td>
      <td>
        {entity.type === 'User' && `${entity.firstName}`}
        {entity.type === 'Product' && `${entity.name}`}
        {entity.type === 'Category' && `${entity.name}`}
      </td>
      <td>
        {entity.type === 'User' && `${entity.lastName}`}
        {entity.type === 'Product' && `${entity.description}`}
        {entity.type === 'Category' && `${entity.description}`}
      </td>
      <td>
        {entity.type === 'User' && `${entity.password}`}
        {entity.type === 'Product' && `${entity.price} TL`}
        {entity.type === 'Category' && `-`}
      </td>
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
