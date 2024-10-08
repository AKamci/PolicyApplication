// src/App.tsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidabar';
import MainContent from './MainContent';
import { Entity, EntityType } from './types';

const App: React.FC = () => {
  const [selectedEntityType, setSelectedEntityType] = useState<EntityType | null>(null);
  const [entities, setEntities] = useState<Entity[]>([]);

  const handleFetchAll = (type: EntityType) => {
    // Bu fonksiyon, veritabanından tüm entity'leri getirmek için API çağrısı yapılabilir.
    // Örnek olarak, mevcut entity'leri console'a yazdırıyoruz.
    console.log(`Fetching all entities of type: ${type} from the database...`);
    // Gerçek bir uygulamada burada API çağrısı yapabilirsiniz.
    // Örneğin, fetch veya axios kullanarak backend API'sinden veri çekebilirsiniz.
    // Şimdilik, örnek olarak sahte veriler ekleyelim.

    // Sahte veriler
    let fetchedEntities: Entity[] = [];
    switch (type) {
      case 'User':
        fetchedEntities = [
          { id: 1, type: 'User', firstName: 'Ali', lastName: 'Veli', password: '12345' },
          { id: 2, type: 'User', firstName: 'Ayşe', lastName: 'Fatma', password: '67890' },
        ];
        break;
      case 'Product':
        fetchedEntities = [
          { id: 3, type: 'Product', name: 'Laptop', description: 'Yüksek performanslı laptop', price: 15000 },
          { id: 4, type: 'Product', name: 'Telefon', description: 'Akıllı telefon', price: 8000 },
        ];
        break;
      case 'Category':
        fetchedEntities = [
          { id: 5, type: 'Category', name: 'Elektronik', description: 'Elektronik ürünler' },
          { id: 6, type: 'Category', name: 'Giyim', description: 'Giyim ürünleri' },
        ];
        break;
      default:
        break;
    }

    setEntities(prevEntities => [...prevEntities, ...fetchedEntities]);
    alert(`${type} türündeki tüm entity'ler getirildi (simülasyon).`);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="bg-light" style={{ minHeight: '100vh' }}>
          <Sidebar
            selectedEntityType={selectedEntityType}
            setSelectedEntityType={setSelectedEntityType}
            onFetchAll={handleFetchAll}
          />
        </Col>
        <Col md={9} className="p-4">
          <MainContent
            selectedEntityType={selectedEntityType}
            entities={entities}
            setEntities={setEntities}
            onFetchAll={handleFetchAll}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
