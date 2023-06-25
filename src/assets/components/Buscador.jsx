import React, { useState } from 'react';

const Buscador = ({ filtrarCrypto }) => {
  const [busqueda, setBusqueda] = useState('');

  const buscarCrypto = (e) => {
    e.preventDefault();
    filtrarCrypto(busqueda);
  };

  return (
    <form onSubmit={buscarCrypto} className="d-flex align-items-center">
      <input
        type="text"
        placeholder="Buscar Crypto"
        value={busqueda}
        className="form-control"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Buscar</button>
    </form>
  );
};

export default Buscador;