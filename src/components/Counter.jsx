import { useState } from 'react';
//useState função utilizada para monitoramento das variveis, pois por padrão o js não as fica monitorando, então caso haja qualquer alteração, //ele não substituiria
export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type='button' onClick={increment}>
        {' '}
        Increment
      </button>
    </div>
  );
}
