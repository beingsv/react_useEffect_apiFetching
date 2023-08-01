import {Component} from  'react';
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
      
  increment = () => {
    this.setState((prev) => ({
      count: prev.count + 1
    }));
  };
  
  decrement = () => {
    this.setState((prev) => ({
      count: prev.count-1
    }));
  };


      
  render() {
    return (
      <div className='counter'>
        <h2>Counter: {this.state.count}</h2>
        <div className='buttons'>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}
      
export default Counter;
