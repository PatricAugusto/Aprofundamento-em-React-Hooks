// src/components/ComponenteFilho.js
import React, { useContext } from 'react';
import { TemaContext } from '../contexts/TemaContext'; // Importamos o contexto
import ComponenteNeto from './ComponenteNeto';

function ComponenteFilho() {
  // Usamos useContext para acessar o valor do TemaContext
  const tema = useContext(TemaContext);

  return (
    <div style={{ border: `1px solid ${tema === 'claro' ? 'black' : 'white'}`, padding: '15px', margin: '10px 0' }}>
      <h2>Componente Filho</h2>
      <p>O tema atual é: **{tema}**</p>
      <ComponenteNeto />
    </div>
  );
}

export default ComponenteFilho;