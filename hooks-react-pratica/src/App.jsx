// src/App.js
import React, { useState } from 'react';
import { TemaContext } from './contexts/TemaContext'; // Importamos o contexto
import ComponenteFilho from './components/ComponenteFilho';

function App() {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    // O Provider envolve os componentes que terão acesso ao tema
    // O 'value' é o dado que estamos compartilhando
    <TemaContext.Provider value={tema}>
      <div style={{ padding: '20px', background: tema === 'claro' ? '#f0f0f0' : '#333', color: tema === 'claro' ? '#333' : '#f0f0f0' }}>
        <h1>App Principal (Tema: {tema})</h1>
        <button onClick={alternarTema}>Alternar Tema</button>
        <ComponenteFilho /> {/* Componente aninhado que consumirá o tema */}
      </div>
    </TemaContext.Provider>
  );
}

export default App;