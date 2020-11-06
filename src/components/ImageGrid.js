import React from "react";
import useFirestore from "../hooks/useFirestore";

function ImageGrid() {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="coming soon..." />
            </div>
          );
        })}
    </div>
  );
}

export default ImageGrid;
