// src/components/EntityList.tsx
import React, { useState } from 'react';
import EntityItem from './EntityItem';
import { Table, Pagination, Modal, Button } from 'react-bootstrap';
import { Entity } from '../types/Types';

interface EntityListProps {
  entities: Entity[];
  setEntities: React.Dispatch<React.SetStateAction<Entity[]>>;
}

const EntityList: React.FC<EntityListProps> = ({ entities, setEntities }) => {
  console.log("EntityList is rendered.")
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [showModal, setShowModal] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);

  const handleDelete = (id: number) => {
    if (window.confirm('Bu entity\'yi silmek istediğinize emin misiniz?')) {
      setEntities(entities.filter(entity => entity.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    alert(`Edit entity with id: ${id}`);
    // Edit işlemleri için modal veya başka bir bileşen ekleyebilirsiniz
  };

  const handleView = (id: number) => {
    const entity = entities.find(e => e.id === id);
    setSelectedEntity(entity || null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEntity(null);
  };

  // Sayfalama hesaplamaları
  const indexOfLastEntity = currentPage * itemsPerPage;
  const indexOfFirstEntity = indexOfLastEntity - itemsPerPage;
  const currentEntities = entities.slice(indexOfFirstEntity, indexOfLastEntity);
  const totalPages = Math.ceil(entities.length / itemsPerPage);

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => (
    <Pagination className="justify-content-center">
      <Pagination.Prev
        onClick={() => currentPage > 1 && handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {Array.from({ length: totalPages }, (_, index) => (
        <Pagination.Item
          key={index + 1}
          active={index + 1 === currentPage}
          onClick={() => handleChangePage(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => currentPage < totalPages && handleChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );

  const renderModal = () => (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Entity Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedEntity ? renderEntityDetails(selectedEntity) : <p>No entity selected.</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Kapat
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const renderEntityDetails = (entity: Entity) => {
    return (
      <div>
        <p><strong>Tür:</strong> {entity.type}</p>
        <p><strong>ID:</strong> {entity.id}</p>
        {entity.type === 'Customer' && (
          <>
            <p><strong>İsim:</strong> {entity.firstName}</p>
            <p><strong>Soyisim:</strong> {entity.lastName}</p>
            <p><strong>Şifre:</strong> {entity.password}</p>
          </>
        )}
        {entity.type === 'CarPolicy' && (
          <>
            <p><strong>Ürün Adı:</strong> {entity.name}</p>
            <p><strong>Açıklama:</strong> {entity.description}</p>
            <p><strong>Fiyat:</strong> {entity.price} TL</p>
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2 className="mb-3">Entity List</h2>
      {entities.length === 0 ? (
        <p>No entities available.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Tür</th>
                <th>İsim</th>
                <th>Soyisim / Açıklama</th>
                <th>Şifre / Fiyat</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentEntities.map(entity => (
                <EntityItem
                  key={entity.id}
                  entity={entity}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onView={handleView}
                />
              ))}
            </tbody>
          </Table>
          {totalPages > 1 && renderPagination()}
        </>
      )}
      {renderModal()}
    </div>
  );
};

export default EntityList;
