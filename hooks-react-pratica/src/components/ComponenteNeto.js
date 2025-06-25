// src/components/ComponenteNeto.js
import React, { useContext } from 'react';
import { TemaContext } from '../contexts/TemaContext';

function ComponenteNeto() {
  const tema = useContext(TemaContext);

  return (
    <div style={{ border: `1px dashed ${tema === 'claro' ? 'blue' : 'yellow'}`, padding: '10px', margin: '10px 0' }}>
      <h3>Componente Neto</h3>
      <p>Eu também sei que o tema é: **{tema}**</p>
    </div>
  );
}

export default ComponenteNeto;