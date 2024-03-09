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

const App = () => {
  // state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react');
  const [loading,setLoading]= useState(false);

  // fetch news
  const fetchNews = () => {
    // set loading true
    setLoading(true)
    fetch(url)
      .then(result => result.json())
      .then(data => (setNews(data.hits), setLoading(false)))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews();
  },[url]); // Add searchQuery to the dependency array

  const handleChange=e=> {
    setSearchQuery(e.target.value);
  }

  const hangleSubmit = e=>{
      e.preventDefault()
      setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  const showLoading =()=> (loading ? <h2>loading...</h2> : "")

  const searchForm =() =>(
    <form onSubmit={hangleSubmit}>
    <input type="text" value={searchQuery} onChange={handleChange}></input>
    <button type="submit">Search</button> {/* Add type="submit" to the button */}
  </form>
  )

  const showNews =()=>{
   return news.map((n, i) => (
      <p key={i}>{n.title}</p>
    ))
  }
  return (
    <div>
      <h2>News</h2>
      {showLoading()}      
      {searchForm()}
      {showNews()}
    </div>
  );
};

export default App;