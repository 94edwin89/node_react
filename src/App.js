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

import React, { useState ,useEffect} from "react";

// const App=()=>

// function App() {
//   const [count, setCount] = useState(0);


//   useEffect(()=>{
//     document.title= `Clicked ${count} times`;
//   })

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <button class="btn btn-light" onClick={increment}>
//         Clicked {count} times
//       </button>
//     </div>
//   );
// }

const App = ()=>{

  const [news,setNews]= useState([]);

  // fetch news

  const fetchNews =()=>{

    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then (result => result.json())
    // .then(data => console.log(data));
    .then (data => setNews(data.hits))
    .catch (error => console.log(error))
  }

  useEffect(()=>{
    fetchNews();


  })

  return (
    <div>
    <h2>News</h2>
    {news.map((n, i) => (
      <p key={i}>{n.title}</p>
    ))}
  </div>
);
}

export default App;
