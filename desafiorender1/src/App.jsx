import { useState } from "react";
import { BaseColaboradores } from "./assets/js/colaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";

function App() {
  const [listacolab, setListacolab] = useState(BaseColaboradores);

  const AddUsuario = (nuevoUsuario) => {
    setListacolab([
      ...listacolab,
      { id: listacolab.length + 1, ...nuevoUsuario },
    ]);
  };

  return (
    <>
      <Formulario onAddUsuario={AddUsuario} />
      <Listado listacolab={listacolab} />
    </>
  );
}

export default App;
