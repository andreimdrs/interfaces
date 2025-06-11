// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Fechar
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;