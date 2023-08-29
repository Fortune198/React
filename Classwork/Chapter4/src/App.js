//import React, { Component } from 'react';
//import Products from './Products';
//import { Button } from 'react-bootstrap';
//import Rating from './Rating';

import React, { Component } from 'react';
import Rating from './Rating';

class App extends Component {

  render() {
    //const isValid = true;
    return (
      
      <div>

        {/* {<h1>My first React App!</h1>
          <Products />
<Button variant="primary" disabled={!isValid}>Default</Button>} */}


        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    );
  }
}

export default App;







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
