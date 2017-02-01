var React = require('react');
var ReactDOM = require('react-dom');

class Keypad extends React.Component {
  constructor(){
    super();
      this.userInput = this.userInput.bind(this)
  }

  userInput() {
    console.log("Entering password...")
  }

  render(){
    return (
      <input type="password" onKeyUp={this.userInput}></input>
      )
  }
}
module.exports = Keypad

