// src/App.tsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar'; // Hatalı isim düzeltildi
import MainContent from './components/MainContent';
import { Entity, EntityType } from './types/types';
import { fetchEntities } from './EntityService/entityService';

const App: React.FC = () => {
  const [selectedEntityType, setSelectedEntityType] = useState<EntityType | null>(null);
  const [entities, setEntities] = useState<Entity[]>([]);

  const handleFetchAll = async (type: EntityType) => {
    console.log(`Fetching all entities of type: ${type} from the database...`);
    
    try {
      // Burada fetchEntities yerine, uygun servis fonksiyonlarını çağırın
      const fetchedEntities = await fetchEntities(type);
      setEntities(prevEntities => [...prevEntities, ...fetchedEntities]);
      alert(`${type} türündeki tüm entity'ler getirildi (simülasyon).`);
    } catch (error) {
      console.error('Error fetching entities:', error);
      alert('Veri çekme hatası oluştu.');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="bg-light" style={{ minHeight: '100vh' }}>
          <Sidebar
            selectedEntityType={selectedEntityType}
            setSelectedEntityType={setSelectedEntityType}
          />
        </Col>
        <Col md={9} className="p-4">
          <MainContent
            selectedEntityType={selectedEntityType}
            entities={entities}
            setEntities={setEntities}
            onFetchAll={handleFetchAll} // Bu satırı ekleyin
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
