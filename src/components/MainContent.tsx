// src/components/MainContent.tsx
import React from 'react';
import { EntityType, Entity } from '../types/types';
import CreateEntityForm from './CreateEntityForm';
import EntityList from './EntityList';
import { Button } from 'react-bootstrap';

interface MainContentProps {
  selectedEntityType: EntityType | null;
  entities: Entity[];
  setEntities: React.Dispatch<React.SetStateAction<Entity[]>>;
  onFetchAll: (type: EntityType) => void;
}

const MainContent: React.FC<MainContentProps> = ({ selectedEntityType, entities, setEntities, onFetchAll }) => {
  return (
    <div>
      {selectedEntityType && (
        <CreateEntityForm
          entityType={selectedEntityType}
          onCreate={(entity: Entity) => setEntities([...entities, entity])}
        />
      )}
      <EntityList entities={entities.filter(entity => !selectedEntityType || entity.type === selectedEntityType)} setEntities={setEntities} />
    </div>
  );
};

export default MainContent;
