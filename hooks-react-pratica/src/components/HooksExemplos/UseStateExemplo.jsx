// src/components/HooksExemplos/UseStateExemplo.jsx

import React, { useState } from 'react';

/**
 * Componente de Exemplo do Hook `useState`
 *
 * O `useState` é um Hook fundamental que permite adicionar estado a componentes funcionais.
 * Ele retorna um par de valores: o estado atual e uma função para atualizá-lo.
 *
 * Exemplo de uso: `const [variavelDeEstado, setVariavelDeEstado] = useState(valorInicial);`
 *
 * - `variavelDeEstado`: O valor atual do estado.
 * - `setVariavelDeEstado`: Uma função que você chama para atualizar o estado.
 * Quando esta função é chamada, o componente é renderizado novamente com o novo valor.
 * - `valorInicial`: O valor com o qual o estado será inicializado na primeira renderização.
 */
function UseStateExemplo() {
  // 1. Declarando uma variável de estado 'contador' com valor inicial 0.
  //    'contador' armazena o valor atual.
  //    'setContador' é a função que usaremos para mudar 'contador'.
  const [contador, setContador] = useState(0);

  // 2. Declarando outra variável de estado 'textoInput' para um campo de texto.
  //    O valor inicial é uma string vazia.
  const [textoInput, setTextoInput] = useState('');

  // Função para lidar com o clique no botão de incremento
  const handleIncrementar = () => {
    setContador(contador + 1); // Atualiza o estado 'contador'
  };

  // Função para lidar com a mudança no campo de texto
  const handleChangeInput = (event) => {
    setTextoInput(event.target.value); // Atualiza o estado 'textoInput' com o valor do input
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>1. Exemplo de `useState`</h3>

      {/* Exemplo de contador */}
      <p>
        **Contador:** Você clicou {contador} vezes.
      </p>
      <button onClick={handleIncrementar}>
        Incrementar Contador
      </button>
      <button onClick={() => setContador(0)} style={{ marginLeft: '10px' }}>
        Resetar Contador
      </button>

      <hr style={{ margin: '15px 0' }} />

      {/* Exemplo de input controlado */}
      <p>
        **Input Controlado:**
      </p>
      <input
        type="text"
        value={textoInput} /* O valor do input é controlado pelo estado */
        onChange={handleChangeInput} /* A cada mudança, o estado é atualizado */
        placeholder="Digite algo aqui..."
        style={{ padding: '8px', width: '200px' }}
      />
      <p>
        Você digitou: <strong>{textoInput}</strong>
      </p>

      <p style={{ fontSize: '0.9em', color: '#666' }}>
        **Documentação:** O `useState` é ideal para gerenciar dados que mudam e precisam ser refletidos na interface do usuário. Ele simplifica o gerenciamento de estado em componentes funcionais, tornando o código mais limpo do que em componentes de classe.
      </p>
    </div>
  );
}

export default UseStateExemplo;