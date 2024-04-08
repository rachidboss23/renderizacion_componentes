import React from 'react';

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <div className='listado'>
      <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo Electronico</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Acciones</th> {/* Agregamos una nueva columna para las acciones */}
        </tr>
      </thead>
      <tbody>
        {colaboradores.map(colaborador => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              {/* Agregamos un botón para eliminar el colaborador */}
              <button onClick={() => eliminarColaborador(colaborador.id)} className="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Listado;
