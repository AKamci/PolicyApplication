// src/components/MainContent.tsx
import React from 'react';
import { EntityType, Entity } from '../types/Types';
import CreateEntityForm from './CreateEntityForm';
import EntityList from './EntityList';

interface MainContentProps {
  selectedEntityType: EntityType | null;
  entities: Entity[];
  setEntities: React.Dispatch<React.SetStateAction<Entity[]>>;
}

const MainContent: React.FC<MainContentProps> = ({ selectedEntityType, entities, setEntities}) => {
  console.log("MainContent is rendered.")
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
