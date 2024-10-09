// src/App.tsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar'; // Hatalı isim düzeltildi
import MainContent from './components/MainContent';
import { Entity, EntityType } from './types/types';

const App: React.FC = () => {
  const [selectedEntityType, setSelectedEntityType] = useState<EntityType | null>(null);
  const [entities, setEntities] = useState<Entity[]>([]);

  
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
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
