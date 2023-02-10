import React from 'react';

const CloseButton = () => {
  const handleClose = () => {
    const confirmation = window.confirm('Are you sure you want to close the window?');
    if (confirmation) {
      window.close();
    }
  };

  return (
    <button className="close-button" onClick={handleClose}>
      ×
    </button>
  );
};

export default CloseButton;
