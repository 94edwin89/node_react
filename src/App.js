// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter App</h1>
//         <button onClick={this.increment}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }

// export default App;


//--------------------------------------------------------------------------

//below is function components and above is class components
//.........................................................................

import React, { useState } from "react";

// const App=()=>

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <button class="btn btn-light" onClick={increment}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default App;
