import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.plusCounter = this.plusCounter.bind(this);
    this.minusCounter = this.minusCounter.bind(this);
  }


  plusCounter() {
    this.setState({ count: this.state.count + 1 });
  }
  minusCounter() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="counter" style={{textAlign: 'center'}}>
        <h1>Counter</h1>
        <div className="user-input">
          <button onClick={this.minusCounter} style={{display: 'inline-block', margin: '0 15px'}}>−</button>
          <p style={{display: 'inline-block', margin:'0 15px'}}>{this.state.count}</p>
          <button onClick={this.plusCounter} style={{display: 'inline-block', margin:'0 15px'}}>+</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
