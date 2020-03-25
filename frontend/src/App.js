//JSX (HTML Integrado dentro do JavaScript)

import React from 'react';

import './global.css'; 

import Routes from './routes';

function App() {
  //const [counter, setCounter] = useState(0);
  //o useState nos retorna um array [valor, função de atualização desse valor]

  return (
    <Routes />
  );
}

export default App;
