// src/components/MainContent.tsx
import React from 'react';
import { EntityType, Entity } from '../types/Types';
import EntityList from './EntityList';
import { CreateEntityType } from '../types/TypesForCreate';

interface MainContentProps {
  selectedEntityType: EntityType | CreateEntityType | null;
  entities: Entity[];
  setEntities: React.Dispatch<React.SetStateAction<Entity[]>>;
}

const MainContent: React.FC<MainContentProps> = ({ selectedEntityType, entities, setEntities }) => {
  console.log("MainContent is rendered.");

  const isCreateEntityType = (type: any): type is CreateEntityType =>
    typeof type === 'object' && 'createTypeProperty' in type;

  return (
    <div>
      <EntityList
        entities={entities.filter(entity => !selectedEntityType || entity.type === selectedEntityType)}
        setEntities={setEntities}
      />
    </div>
  );
};

export default MainContent;
