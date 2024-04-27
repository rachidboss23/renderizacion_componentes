import React from 'react';

const Buscador = ({ colaboradores, setColaboradores }) => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredColaboradores = colaboradores.filter(colaborador =>
      Object.values(colaborador).some(value =>
        value.toString().toLowerCase().includes(searchTerm)
      )
    );
    setColaboradores(filteredColaboradores);
  };

  return (
    <div className='buscador'>
      <input type="text" className="form-control" placeholder="Buscar Colaborador" onChange={handleSearch} />
    </div>
  )
}
export default Buscador;




