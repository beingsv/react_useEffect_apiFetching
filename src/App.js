import {useState, useEffect} from 'react';

const MyInfo = () => {
  const [data, setData] = useState([]);

  useEffect (() => {
    const fetching = async () => {
      try{
        const res = await fetch('https://catfact.ninja/fact');
        const js = await res.json();
        setData(js.fact);
      }
      catch(error){
        console.log("Error");
      }
    }
    fetching();

    return() => {
    };

  }, []);

  return (
    <div>
      <h1>MyInformation</h1>
      <p>{data}</p>
    </div>

  );
}

export default MyInfo;







// import { useState } from "react";

// function Hooks(){
//     const [count, setCount] = useState(0);
//     const counting = () => {
//         setCount(count+1);
//     };

//     return(
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={counting}></button>
//         </div>
//     );


// }

// export default Hooks;


// import {Component} from  'react';
// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//   }

//   increment = () => {
//     this.setState((i) => ({
//       count: i.count + 1
//     }));
//   };

//   decrement = () => {
//     this.setState((i) => ({
//       count: i.count - 1
//     }));
//   };

//   makeItZero = () => {
//     this.setState(() => ({
//       count: 0
//     }));
//   };

//   render() {
//     return (
//       <div className='counter'>
//         <h2>Counter: {this.state.count}</h2>
//         <div className='buttons'>
//           <button onClick={this.increment}>+</button>
//           <button onClick={this.decrement}>-</button>
//           <button onClick={this.makeItZero}>Reset</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
