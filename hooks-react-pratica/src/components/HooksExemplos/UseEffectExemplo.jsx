// src/components/HooksExemplos/UseEffectExemplo.jsx

import React, { useState, useEffect } from 'react';

/**
 * Componente de Exemplo do Hook `useEffect`
 *
 * O `useEffect` é usado para lidar com "efeitos colaterais" em componentes funcionais.
 * Efeitos colaterais são operações que interagem com o mundo exterior ao React,
 * como:
 * - Busca de dados de uma API.
 * - Manipulação direta do DOM.
 * - Configuração de assinaturas ou temporizadores.
 * - Limpeza de recursos (como cancelar timers ou remover listeners).
 *
 * Ele funciona como uma combinação dos métodos de ciclo de vida de classes:
 * `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`.
 *
 * Sintaxe básica:
 * `useEffect(() => { /* código do efeito *\/ return () => { /* código de limpeza *\/ }; }, [dependencias]);`
 */
function UseEffectExemplo() {
  const [contador, setContador] = useState(0);
  const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);

  // 1. Exemplo de useEffect sem array de dependências (executa em cada renderização)
  //    Geralmente, deve ser evitado, a menos que você realmente precise disso.
  useEffect(() => {
    console.log('UseEffect sem dependências: Executado em cada renderização.');
    // CUIDADO: Pode levar a loops infinitos se você atualizar o estado aqui sem condição.
  });

  // 2. Exemplo de useEffect com array de dependências vazio `[]` (executa apenas uma vez, no "mount")
  //    Similar a `componentDidMount`. Útil para buscar dados iniciais ou configurar listeners globais.
  useEffect(() => {
    console.log('UseEffect com []: Componente montado (executa apenas uma vez).');

    // Configura um listener de redimensionamento da janela
    const handleResize = () => {
      setLarguraJanela(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // Função de limpeza (cleanup function)
    // Similar a `componentWillUnmount`. É executada quando o componente é desmontado.
    // É crucial para evitar vazamentos de memória (ex: remover listeners, cancelar subscriptions).
    return () => {
      console.log('UseEffect com []: Função de limpeza executada (componente desmontado).');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Array de dependências vazio: o efeito só roda na montagem e a limpeza na desmontagem.

  // 3. Exemplo de useEffect com dependências (executa quando as dependências mudam)
  //    Similar a `componentDidUpdate` (com condição).
  useEffect(() => {
    console.log(`UseEffect com [contador]: O contador mudou para ${contador}.`);
    // Este efeito será executado na montagem e sempre que 'contador' mudar.

    // Exemplo: Atualizar o título do documento com base no contador
    document.title = `Você clicou ${contador} vezes`;

    // A função de limpeza também será executada ANTES de uma nova execução do efeito
    // (se as dependências mudarem) e na desmontagem.
    return () => {
      console.log(`Limpando efeito de contador anterior (valor: ${contador}).`);
    };
  }, [contador]); // Este efeito depende do 'contador'.

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>2. Exemplo de `useEffect`</h3>

      <p>
        **Contador:** {contador}
      </p>
      <button onClick={() => setContador(c => c + 1)}>
        Incrementar Contador
      </button>

      <p>
        **Largura da Janela:** {larguraJanela}px (Este valor é atualizado por um `useEffect` que só roda na montagem e configura um listener de resize, que é limpo na desmontagem.)
      </p>

      <p style={{ fontSize: '0.9em', color: '#666' }}>
        **Documentação:** O `useEffect` é o seu principal Hook para lidar com operações que têm "efeitos colaterais". A chave para usá-lo corretamente está em entender o array de dependências e a função de limpeza, que garantem que seus efeitos sejam executados e limpos nos momentos certos do ciclo de vida do componente.
      </p>
    </div>
  );
}

export default UseEffectExemplo;