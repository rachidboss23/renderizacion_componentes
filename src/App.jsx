import React, { useState } from 'react';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';
import Alert from './Components/Alert';
import './App.css'
import { BaseColaboradores } from './Components/BaseColaboradores';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre !== '' &&
      nuevoColaborador.correo !== '' &&
      nuevoColaborador.edad !== '' &&
      nuevoColaborador.cargo !== '' &&
      nuevoColaborador.telefono !== ''
    ) {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setAlerta({ tipo: 'success', mensaje: 'Colaborador agregado exitosamente' });
    } else {
      setAlerta({ tipo: 'danger', mensaje: 'Todos los campos son requeridos' });
    }
  };

  const eliminarColaborador = (id) => {
    const nuevoColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevoColaboradores);
  };

  return (
    <div className="container">
      <div className='titulo'>
      <h1>Lista de Colaboradores</h1>
      </div>
    
      {alerta && <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} />}
      <Formulario agregarColaborador={agregarColaborador} />
      {/* <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} /> */}
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
    </div>
  );
}

export default App;
