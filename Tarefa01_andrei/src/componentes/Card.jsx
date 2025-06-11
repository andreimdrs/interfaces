// src/components/Card.jsx
import { useState } from 'react';
import Modal from './Modal'; // Ajuste o caminho conforme necessário

export default function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="card"
        style={{ width: '18rem', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <div className="card-body">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{props.nome}</p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Conteúdo do Modal</h2>
        <p>Este é um modal simples!</p>
      </Modal>
    </>
  );
}