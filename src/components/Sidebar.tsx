// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { ListGroup, Button, Collapse } from 'react-bootstrap';
import { userFetchOptions, getUserData } from '../AllFetch/UserFetch';
import { productFetchOptions, getProductData } from '../AllFetch/ProductFetch';
import { categoryFetchOptions, getCategoryData } from '../AllFetch/CategoryFetch';
import { EntityType } from '../types/types';

interface SidebarProps {
  selectedEntityType: EntityType | null;
  setSelectedEntityType: (type: EntityType | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedEntityType, setSelectedEntityType }) => {
  const [open, setOpen] = useState(false);
  const [selectedFetchOption, setSelectedFetchOption] = useState<string | null>(null);

  const handleFetchOptionClick = async (type: EntityType, queryId: number) => {
    let fetchedData;

    switch (type) {
      case 'Customer':
        fetchedData = await getUserData(queryId);
        break;
      case 'CarPolicy':
        fetchedData = await getProductData(queryId);
        break;
      default:
        break;
    }

    console.log(fetchedData);
    setSelectedFetchOption(`${type} Fetch Option (${queryId})`);
  };

  const renderFetchOptions = (
    selectedEntityType: EntityType,
    onFetchOptionClick: (type: EntityType, queryId: number) => void
  ) => {
    let fetchOptions: string[] = [];

    switch (selectedEntityType) {
      case 'Customer':
        fetchOptions = userFetchOptions;
        break;
      case 'CarPolicy':
        fetchOptions = productFetchOptions;
        break;
      default:
        break;
    }

    return (
      <ListGroup variant="flush">
        {fetchOptions.map((option, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => onFetchOptionClick(selectedEntityType, index + 1)}
          >
            {option}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item
          action
          active={selectedEntityType === null}
          onClick={() => setSelectedEntityType(null)}
        >
          Tüm Entity'ler
        </ListGroup.Item>
        {['Customer', 'CarPolicy'].map((type) => (
          <ListGroup.Item
            key={type}
            action
            active={selectedEntityType === type}
            onClick={() => setSelectedEntityType(type as EntityType)}
          >
            {type}
          </ListGroup.Item>
        ))}
        {selectedEntityType && (
          <ListGroup.Item>
            <Button
              variant="secondary"
              onClick={() => setOpen(!open)}
              aria-controls="fetch-options"
              aria-expanded={open}
              className="w-100"
            >
              Veritabanı İşlemleri
            </Button>
            <Collapse in={open}>
              <div id="fetch-options" className="mt-2">
                {renderFetchOptions(selectedEntityType, handleFetchOptionClick)}
              </div>
            </Collapse>
          </ListGroup.Item>
        )}
      </ListGroup>
      {selectedFetchOption && (
        <div className="mt-3">
          <h5>{selectedFetchOption}</h5>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
