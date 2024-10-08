// src/components/EntityList.tsx
import React, { useState } from 'react';
import EntityItem from './EntityItem';
import { Table, Pagination, Modal, Button } from 'react-bootstrap';
import { Entity } from '../types/types';

interface EntityListProps {
  entities: Entity[];
  setEntities: React.Dispatch<React.SetStateAction<Entity[]>>;
}

const EntityList: React.FC<EntityListProps> = ({ entities, setEntities }) => {
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

  // Sayfalama için sayfa numaralarını oluştur
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handleChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

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
          {totalPages > 1 && (
            <Pagination className="justify-content-center">
              <Pagination.Prev
                onClick={() => currentPage > 1 && handleChangePage(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {paginationItems}
              <Pagination.Next
                onClick={() => currentPage < totalPages && handleChangePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          )}
        </>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Entity Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEntity ? (
            <div>
              <p><strong>Tür:</strong> {selectedEntity.type}</p>
              {selectedEntity.type === 'User' && (
                <>
                  <p><strong>ID:</strong> {selectedEntity.id}</p>
                  <p><strong>İsim:</strong> {selectedEntity.firstName}</p>
                  <p><strong>Soyisim:</strong> {selectedEntity.lastName}</p>
                  <p><strong>Şifre:</strong> {selectedEntity.password}</p>
                </>
              )}
              {selectedEntity.type === 'Product' && (
                <>
                  <p><strong>ID:</strong> {selectedEntity.id}</p>
                  <p><strong>Ürün Adı:</strong> {selectedEntity.name}</p>
                  <p><strong>Açıklama:</strong> {selectedEntity.description}</p>
                  <p><strong>Fiyat:</strong> {selectedEntity.price} TL</p>
                </>
              )}
              {selectedEntity.type === 'Category' && (
                <>
                  <p><strong>ID:</strong> {selectedEntity.id}</p>
                  <p><strong>Kategori Adı:</strong> {selectedEntity.name}</p>
                  <p><strong>Açıklama:</strong> {selectedEntity.description}</p>
                </>
              )}
            </div>
          ) : (
            <p>No entity selected.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EntityList;
