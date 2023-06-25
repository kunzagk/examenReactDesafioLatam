import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from './assets/components/MiApi.jsx';

const App = () => {
  return (
    <>
      <div className="bg-dark text-white text-center">
        <div>
          <h1>Bienvenidos a mi API de Cryptocurrencies</h1>
        </div>
        <div >
        <h4>Los precios de las monedas más populares se pueden ver acá: </h4>
        </div>
        <div className="container">
          <MiApi />
        </div>
      </div>
    </>
  );
};

export default App;