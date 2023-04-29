import Modal from '../components/Modal';

import { useState } from 'react';

function ModalPage({ data }) {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <button onClick={handleClose} className="btn btn-secondary">
        Close
      </button>
    </div>
  );

  const refernceCheck = () => {
    if (data.reference) {
      return data.reference;
    } else {
      return 'Out of Scope - N/A';
    }
  };

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <div className="text">
        <div className="title">EFT Receipt for {data.applicationType}</div>
        <div>Name: {data.name}</div>
        <div>Reference No: {refernceCheck()}</div>
      </div>
    </Modal>
  );

  return (
    <div>
      <button onClick={handleClick} className="btn btn-outline-primary btn-sm ">
        View
      </button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
