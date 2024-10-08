// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { ListGroup, Button, Collapse } from 'react-bootstrap';
import { EntityType } from '../types/types';

interface SidebarProps {
  selectedEntityType: EntityType | null;
  setSelectedEntityType: (type: EntityType | null) => void;
  onFetchAll: (type: EntityType, queryId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedEntityType, setSelectedEntityType, onFetchAll }) => {
  const entityTypes: EntityType[] = ['User', 'Product', 'Category'];
  const [open, setOpen] = useState(false);
  const [selectedFetchOption, setSelectedFetchOption] = useState<string | null>(null); // Fetch seçeneğini tutan durum

  const handleFetchOptionClick = (type: EntityType, queryId: number) => {
    onFetchAll(type, queryId); // API çağrısını yap
    setSelectedFetchOption(`${type} Getir (${queryId})`); // Seçilen fetch seçeneğini güncelle
  };

  return (
    <div>
      <ListGroup variant="flush">
        {renderEntityList(entityTypes, selectedEntityType, setSelectedEntityType)}
        {selectedEntityType && renderFetchButton(open, setOpen, selectedEntityType, handleFetchOptionClick)}
      </ListGroup>
      {selectedFetchOption && ( // Seçilen fetch seçeneğini ekrana yazdır
        <div className="mt-3">
          <h5>{selectedFetchOption}</h5>
        </div>
      )}
    </div>
  );
};

const renderEntityList = (
  entityTypes: EntityType[],
  selectedEntityType: EntityType | null,
  setSelectedEntityType: (type: EntityType | null) => void
) => {
  return (
    <>
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
    </>
  );
};

const renderFetchButton = (
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  selectedEntityType: EntityType,
  onFetchOptionClick: (type: EntityType, queryId: number) => void
) => {
  return (
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
          {renderFetchOptions(selectedEntityType, onFetchOptionClick)}
        </div>
      </Collapse>
    </ListGroup.Item>
  );
};

const renderFetchOptions = (
  selectedEntityType: EntityType,
  onFetchOptionClick: (type: EntityType, queryId: number) => void
) => {
  const fetchOptions: { [key in EntityType]: string[] } = {
    User: [
      "Kullanıcıları Getir (1)",
      "Kullanıcıları Getir (2)",
      "Kullanıcıları Getir (3)",
      "Kullanıcıları Getir (4)",
      "Kullanıcıları Getir (5)",
      "Kullanıcıları Getir (6)",
      "Kullanıcıları Getir (7)",
      "Kullanıcıları Getir (8)",
      "Kullanıcıları Getir (9)",
      "Kullanıcıları Getir (10)",
    ],
    Product: [
      "Ürünleri Getir (1)",
      "Ürünleri Getir (2)",
      "Ürünleri Getir (3)",
      "Ürünleri Getir (4)",
      "Ürünleri Getir (5)",
      "Ürünleri Getir (6)",
      "Ürünleri Getir (7)",
      "Ürünleri Getir (8)",
      "Ürünleri Getir (9)",
      "Ürünleri Getir (10)",
    ],
    Category: [
      "Kategorileri Getir (1)",
      "Kategorileri Getir (2)",
      "Kategorileri Getir (3)",
      "Kategorileri Getir (4)",
      "Kategorileri Getir (5)",
      "Kategorileri Getir (6)",
      "Kategorileri Getir (7)",
      "Kategorileri Getir (8)",
      "Kategorileri Getir (9)",
      "Kategorileri Getir (10)",
    ],
  };

  return (
    <ListGroup variant="flush">
      {fetchOptions[selectedEntityType].map((option, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => onFetchOptionClick(selectedEntityType, index + 1)} // queryId 1'den başlıyor
        >
          {option}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Sidebar;
