// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { ListGroup, Button, Collapse } from 'react-bootstrap';
import { EntityType } from '../types/types';

interface SidebarProps {
  selectedEntityType: EntityType | null;
  setSelectedEntityType: (type: EntityType | null) => void;
  onFetchAll: (type: EntityType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedEntityType, setSelectedEntityType, onFetchAll }) => {
  const entityTypes: EntityType[] = ['User', 'Product', 'Category'];
  const [open, setOpen] = useState(false);

  const handleFetchAll = () => {
    if (selectedEntityType) {
      onFetchAll(selectedEntityType);
    }
  };

  return (
    <ListGroup variant="flush">
      <ListGroup.Item
        action
        active={selectedEntityType === null}
        onClick={() => setSelectedEntityType(null)}
      >
        Tüm Entity'ler
      </ListGroup.Item>
      {entityTypes.map((type) => (
        <ListGroup.Item
          key={type}
          action
          active={selectedEntityType === type}
          onClick={() => setSelectedEntityType(type)}
        >
          {type}
        </ListGroup.Item>
      ))}
      {selectedEntityType && (
        <>
          <ListGroup.Item>
            <Button
              variant="secondary"
              onClick={() => setOpen(!open)}
              aria-controls="fetch-options"
              aria-expanded={open}
              className="w-100"
            >
              Veritabanından Hepsini Getir
            </Button>
            <Collapse in={open}>
              <div id="fetch-options" className="mt-2">
                {/* Entity türüne özel fetch seçeneklerini buraya ekleyin */}
                {selectedEntityType === 'User' && (
                  <ListGroup variant="flush">
                    <ListGroup.Item action onClick={() => onFetchAll('User')}>
                      Tüm Kullanıcıları Getir
                    </ListGroup.Item>
                  </ListGroup>
                )}
                {selectedEntityType === 'Product' && (
                  <ListGroup variant="flush">
                    <ListGroup.Item action onClick={() => onFetchAll('Product')}>
                      Tüm Ürünleri Getir
                    </ListGroup.Item>
                  </ListGroup>
                )}
                {selectedEntityType === 'Category' && (
                  <ListGroup variant="flush">
                    <ListGroup.Item action onClick={() => onFetchAll('Category')}>
                      Tüm Kategorileri Getir
                    </ListGroup.Item>
                  </ListGroup>
                )}
              </div>
            </Collapse>
          </ListGroup.Item>
        </>
      )}
    </ListGroup>
  );
};

export default Sidebar;
