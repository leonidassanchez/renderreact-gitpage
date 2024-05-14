import { useState } from "react";
import { BaseColaboradores } from "../assets/js/colaboradores";

// Formulario.jsx

import Alert from "./Alert";

function Formulario({ onAddUsuario }) {
  const [nombre1, setNombre1] = useState("");
  const [correo1, setCorreo1] = useState("");
  const [edad1, setEdad1] = useState("");
  const [cargo1, setCargo1] = useState("");
  const [telefono1, setTelefono1] = useState("");
  const [alert1, setAlert1] = useState("");

  const handleGuardar = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      nombre: nombre1,
      correo: correo1,
      edad: edad1,
      cargo: cargo1,
      telefono: telefono1,
    };

    if (
      nombre1 === "" ||
      correo1 === "" ||
      edad1 === "" ||
      cargo1 === "" ||
      telefono1 === ""
    ) {
      return setAlert1("Debes ingresar todos los datos");
    }

    onAddUsuario(nuevoUsuario); // Agregar nuevo usuario
    setAlert1("Usuario agregado con éxito");
    setNombre1("");
    setCorreo1("");
    setEdad1("");
    setCargo1("");
    setTelefono1("");
  };

  return (
    <>
      <Alert message={alert1} />
      <form onSubmit={handleGuardar}>
        <div className="form-group">
          <label htmlFor="nombre1">Nombre:</label>
          <input
            type="text"
            id="nombre1"
            value={nombre1}
            placeholder="Ingrese su nombre"
            onChange={(e) => setNombre1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo1">Correo:</label>
          <input
            type="text"
            id="correo1"
            value={correo1}
            placeholder="Ingrese su correo"
            onChange={(e) => setCorreo1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad1">Edad:</label>
          <input
            type="text"
            id="edad1"
            value={edad1}
            placeholder="Ingrese su edad"
            onChange={(e) => setEdad1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cargo1">Cargo:</label>
          <input
            type="text"
            id="cargo1"
            value={cargo1}
            placeholder="Ingrese su cargo"
            onChange={(e) => setCargo1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono1">Teléfono:</label>
          <input
            type="text"
            id="telefono1"
            value={telefono1}
            placeholder="Ingrese su teléfono"
            onChange={(e) => setTelefono1(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Formulario;
