import './App.css';
import Contador from './componentes/Contador.jsx';
import Boton from './componentes/Boton.jsx';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';
import { useState } from 'react'; //Importamos Hook para estado de componente

function App() {

  //Seteamos estado del componente Contador
  const [nroClics, setNroClics] = useState(0); //Pasamos como parámetro el valor inicial del contador

  const manejarClic = () => {
    setNroClics(nroClics + 1); //Seteamos nuevo nro de clics
  };

  const reiniciarContador = () => {
    setNroClics(0); //Reiniciamos nro de clics
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo' 
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador nroClics={ nroClics } />
        <Boton
          texto='Clic'
          esBotonDeClic={ true }
          manejarClic={ manejarClic } />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={ false }
          manejarClic={ reiniciarContador } />
      </div>
    </div>
  );
}

export default App;
