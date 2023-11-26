import React from 'react';
import Navbar from './navbar'; // Importa el componente Navbar

const Root = (props) => {
  return (
    <body>
    <nav>
      <Navbar /> {/* Agrega el componente Navbar aquí */}
    </nav>
    </body>
  );
}

export default Root;
