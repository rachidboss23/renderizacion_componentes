import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColaborador({ ...nuevoColaborador, id: Date.now().toString() });
    setNuevoColaborador({
      id: '',
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    });
  };

  return (
    <div className='formulario'>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={nuevoColaborador.nombre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input type="email" className="form-control" id="correo" name="correo" value={nuevoColaborador.correo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad</label>
          <input type="number" className="form-control" id="edad" name="edad" value={nuevoColaborador.edad} onChange={handleChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="cargo">Cargo</label>
          <input type="text" className="form-control" id="cargo" name="cargo" value={nuevoColaborador.cargo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" value={nuevoColaborador.telefono} onChange={handleChange}  />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-3">Agregar colaborador</button>
      </form>
    </div>
  );
};

export default Formulario;



