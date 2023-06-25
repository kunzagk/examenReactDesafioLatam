import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Buscador from './Buscador.jsx';

const MiApi = () => {
  const [data, setData] = useState([]);
  const [dataFiltrada, setDataFiltrada] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        const data = await response.json();
        console.log(data);
        setData(data.slice(0, 100));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const sortedData = data.sort((a, b) => b.market_cap - a.market_cap);

  const handleBusqueda = (busqueda) => {
    const resultadosFiltrados = sortedData.filter((crypto) => {
      return crypto.name.toLowerCase().includes(busqueda.toLowerCase());
    });
    setDataFiltrada(resultadosFiltrados);
  };

  return (
    <div>
      <Buscador filtrarCrypto={handleBusqueda} />
      <Row>
        {(dataFiltrada.length > 0 ? dataFiltrada : sortedData).map((crypto) => (
          <Col key={crypto.id} xs={12} md={6} lg={4} xl={3} className="p-2 text-center">
            <Card className="bg-dark text-white" border="white">
              <div className="d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
                <Card.Img src={crypto.image} className="w-50" />
              </div>
              <Card.Body>
                <Card.Title>{crypto.name}</Card.Title>
                <Card.Text>Precio: {crypto.current_price} USD</Card.Text>
                <Card.Text>Market Cap: {crypto.market_cap} USD</Card.Text>
                <Card.Text>Volumen: {crypto.total_volume} USD</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MiApi;