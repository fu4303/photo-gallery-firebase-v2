import React from "react";

function Modal({ selectedImage, setSelectedImage }) {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImage} alt="modal pic" />
    </div>
  );
}

export default Modal;
