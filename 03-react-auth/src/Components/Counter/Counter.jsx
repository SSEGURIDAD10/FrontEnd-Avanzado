import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Inicializamos el contador con el valor guardado en localStorage (o 0 si no hay nada guardado)
  const [contador, setContador] = useState(() => {
    const savedCounter = localStorage.getItem('contador');
    return savedCounter !== null ? Number(savedCounter) : 0;
  });

  // Actualizamos el valor de localStorage cada vez que cambie el contador
  useEffect(() => {
    localStorage.setItem('contador', contador);
  }, [contador]);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Función para reiniciar el contador a 0
  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Counter;