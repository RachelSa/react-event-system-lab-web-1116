var React = require('react');
var ReactDOM = require('react-dom');

class EyesOnMe extends React.Component {
  constructor() {
    super();
 
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this)
  }
 
  focus() {
    console.log('Good!');
  }

  blur(){
    console.log("Hey! Eyes on me!")
  }
 
  render() {
    return (
      <div>
        <button onFocus={this.focus} onBlur={this.blur}>Club Button!</button>
      </div>

    );
  }
}

module.exports = EyesOnMe