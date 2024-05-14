import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { BaseColaboradores } from "../assets/js/colaboradores";

// Listado.jsx

import Buscador from "./Buscador";

function Listado({ listacolab }) {
  const [filteredColab, setFilteredColab] = useState(listacolab);

  const handleSearch = (searchTerm) => {
    const filtered = listacolab.filter((colab) =>
      colab.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColab(filtered);
  };

  return (
    <>
      <Buscador onSearch={handleSearch} />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {filteredColab.map((elemento1, index) => (
            <tr key={index}>
              <td>{elemento1.id}</td>
              <td>{elemento1.nombre}</td>
              <td>{elemento1.correo}</td>
              <td>{elemento1.edad}</td>
              <td>{elemento1.cargo}</td>
              <td>{elemento1.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Listado;
