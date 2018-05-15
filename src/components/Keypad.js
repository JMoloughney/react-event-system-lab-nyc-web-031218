// Code EyesOnMe Component Here
import React from 'react';

class Keypad extends React.Component{


  keyup = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.keyup} type='password' />
    );
  }
}

export default Keypad;
