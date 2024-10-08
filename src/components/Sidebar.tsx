import React, { useState } from 'react';
import { ListGroup, Button, Collapse } from 'react-bootstrap';
import { EntityType } from '../types/types';
import { fetchUsers } from '../EntityService/UserService';
import { fetchProducts } from '../EntityService/ProductService';
import { fetchCategories } from '../EntityService/CategoryService';

interface SidebarProps {
  selectedEntityType: EntityType | null;
  setSelectedEntityType: (type: EntityType | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedEntityType, setSelectedEntityType }) => {
  const entityTypes: EntityType[] = ['User', 'Product', 'Category'];
  const [open, setOpen] = useState(false);
  const [selectedFetchOption, setSelectedFetchOption] = useState<string | null>(null);

  const handleFetchOptionClick = async (type: EntityType, queryId: number) => {
    let fetchedData;
    switch (type) {
      case 'User':
        fetchedData = await fetchUsers(queryId);
        break;
      case 'Product':
        fetchedData = await fetchProducts(queryId);
        break;
      case 'Category':
        fetchedData = await fetchCategories(queryId);
        break;
      default:
        break;
    }

    // API'den çekilen veriyi işleme (örneğin, bir state'e kaydetme)
    console.log(fetchedData); 

    setSelectedFetchOption(`${type} Fetch Option (${queryId})`);
  };

  return (
    <div>
      <ListGroup variant="flush">
        {renderEntityList(entityTypes, selectedEntityType, setSelectedEntityType)}
        {selectedEntityType && renderFetchButton(open, setOpen, selectedEntityType, handleFetchOptionClick)}
      </ListGroup>
      {selectedFetchOption && (
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
        Veritabanı İşlemleri
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
      "Kullanıcıları Getir (1) - Tüm kullanıcılar",
      "Kullanıcıların Köpeklerini Getir (2)",
      "Kullanıcıların Yaşlarını Getir (3)",
      "Kullanıcıların Email'lerini Getir (4)",
      "Kullanıcıların Şehirlerini Getir (5)",
      "Kullanıcıların Hakkında Bilgilerini Getir (6)",
      "Kullanıcıların Favori Ürünlerini Getir (7)",
      "Kullanıcıların Arkadaşlarını Getir (8)",
      "Kullanıcıların En Son Aktivite Zamanını Getir (9)",
      "Kullanıcıların Profil Resimlerini Getir (10)",
    ],
    Product: [
      "Ürünleri Getir (1) - Tüm ürünler",
      "Yeni Ürünleri Getir (2)",
      "İndirimli Ürünleri Getir (3)",
      "En Çok Satan Ürünleri Getir (4)",
      "Yüksek Puanlı Ürünleri Getir (5)",
      "Stokta Olan Ürünleri Getir (6)",
      "Önerilen Ürünleri Getir (7)",
      "Kategorilere Göre Ürünleri Getir (8)",
      "Son Eklenen Ürünleri Getir (9)",
      "Düşük Fiyatlı Ürünleri Getir (10)",
    ],
    Category: [
      "Kategorileri Getir (1) - Tüm kategoriler",
      "Alt Kategorileri Getir (2)",
      "Popüler Kategorileri Getir (3)",
      "Yeni Kategorileri Getir (4)",
      "Kategorilere Göre Ürünleri Getir (5)",
      "Kategorilerin Altında Olan Ürünleri Getir (6)",
      "Kategorilerin İlgili Ürünlerini Getir (7)",
      "Kategorilere Göre Kullanıcıları Getir (8)",
      "Kategorilere Göre Satışları Getir (9)",
      "Kategorilere Göre İndirimleri Getir (10)",
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
