// Buscador.jsx
import React, { useState } from "react";

function Buscador({ onSearch }) {
  const [buscar, setBuscar] = useState("");

  const handleChange = (e) => {
    setBuscar(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por nombre..."
        value={buscar}
        onChange={handleChange}
      />
    </div>
  );
}

export default Buscador;
