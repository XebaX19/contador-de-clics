import React from 'react';
import '../css/Contador.css';

//Con componente de "clase"
class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        { this.props.nroClics }
      </div>
    );
  }
}

//Con componente "funcional"
// function Contador({ nroClics }) {
//   return (
//     <div className='contador'>
//       { nroClics }
//     </div>
//   );
// }

export default Contador;