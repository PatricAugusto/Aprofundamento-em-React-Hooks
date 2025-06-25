// src/App.jsx

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importe os componentes de exemplo dos Hooks aqui
import UseStateExemplo from './components/HooksExemplos/UseStateExemplo';
import UseEffectExemplo from './components/HooksExemplos/UseEffectExemplo';
// Importe os outros exemplos à medida que você os criar
// import UseContextExemplo from './components/HooksExemplos/UseContextExemplo';
// import UseRefExemplo from './components/HooksExemplos/UseRefExemplo';
// import UseReducerExemplo from './components/HooksExemplos/UseReducerExemplo';
// import UseCallbackExemplo from './components/HooksExemplos/UseCallbackExemplo';
// import UseMemoExemplo from './components/HooksExemplos/UseMemoExemplo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Prática de React Hooks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador Padrão Vite: {count}
        </button>
        <p>
          Edite <code>src/App.jsx</code> e salve para testar HMR
        </p>
      </div>
      <p className="read-the-docs">
        Clique nos logos Vite e React para aprender mais
      </p>

      <hr style={{ margin: '40px 0', borderColor: '#eee' }} />

      {/* Renderize seus componentes de exemplo de Hooks aqui */}
      <h2>Meus Exemplos de Hooks</h2>
      <UseStateExemplo />
      <UseEffectExemplo />
      {/* Adicione os outros exemplos aqui conforme você os criar */}
      {/* <UseContextExemplo /> */}
      {/* <UseRefExemplo /> */}
      {/* <UseReducerExemplo /> */}
      {/* <UseCallbackExemplo /> */}
      {/* <UseMemoExemplo /> */}

    </>
  )
}

export default App