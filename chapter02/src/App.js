import React, { Component } from 'react';
import Products from './Products';

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  };

  render() {
    const user = {
      firstName: 'Fortune',
      lastName: 'Matshika'
    };

    return (
      <div>
        {/* <h1>Ekse, {this.formatName(user)}!</h1> */}
        <Products/>
        {/* <h1>
          My Second React App!
        </h1>
        <Products /> */}
      </div>
    );
  }
}
export default App;
