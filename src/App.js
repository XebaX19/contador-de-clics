import React from 'react';
import './App.css';
import Contador from './componentes/Contador.jsx';
import Boton from './componentes/Boton.jsx';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';
//import { useState } from 'react'; //Importamos Hook para estado de componente, sólo si se utiliza componente "funcional"

//Con componente de "clase"
class App extends React.Component {
  constructor() { //Lo necesitamos si requerimos asignar un estado al componente (se reeplaza por el Hook en el componente funcional)
    super();
    this.state = {
      nroClics: 0
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ nroClics }) => ({ nroClics: nroClics + 1 }));
  }

  reiniciarContador() {
    this.setState({ nroClics: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo' 
            src={ freeCodeCampLogo }
            alt='Logo de freeCodeCamp'
          />
        </div>
        <div className='contenedor-principal'>
          <Contador nroClics={ this.state.nroClics } />
          <Boton
            texto='Clic'
            esBotonDeClic={ true }
            manejarClic={ this.manejarClic } />
          <Boton
            texto='Reiniciar'
            esBotonDeClic={ false }
            manejarClic={ this.reiniciarContador } />
        </div>
      </div>
    );  
  }
}

//Con componente de "funcional"
// function App() {

//   //Seteamos estado del componente Contador
//   const [nroClics, setNroClics] = useState(0); //Pasamos como parámetro el valor inicial del contador

//   const manejarClic = () => {
//     setNroClics(nroClics + 1); //Seteamos nuevo nro de clics
//   };

//   const reiniciarContador = () => {
//     setNroClics(0); //Reiniciamos nro de clics
//   };

//   return (
//     <div className="App">
//       <div className='freecodecamp-logo-contenedor'>
//         <img 
//           className='freecodecamp-logo' 
//           src={freeCodeCampLogo}
//           alt='Logo de freeCodeCamp'
//         />
//       </div>
//       <div className='contenedor-principal'>
//         <Contador nroClics={ nroClics } />
//         <Boton
//           texto='Clic'
//           esBotonDeClic={ true }
//           manejarClic={ manejarClic } />
//         <Boton
//           texto='Reiniciar'
//           esBotonDeClic={ false }
//           manejarClic={ reiniciarContador } />
//       </div>
//     </div>
//   );
// }

export default App;
