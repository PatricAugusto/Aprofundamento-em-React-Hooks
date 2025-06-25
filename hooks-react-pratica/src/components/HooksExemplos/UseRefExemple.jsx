import React, { useRef } from 'react';

function FocoInput() {
  // Criamos uma referência. O 'inputRef.current' será o elemento input.
  const inputRef = useRef(null); // Valor inicial é null

  const handleFocarInput = () => {
    // Acessamos o elemento DOM real através de inputRef.current
    if (inputRef.current) {
      inputRef.current.focus(); // Chamamos o método focus() do elemento DOM
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} /> {/* Atribuímos a ref ao elemento */}
      <button onClick={handleFocarInput}>Focar Input</button>
    </div>
  );
}

export default FocoInput;