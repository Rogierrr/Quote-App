import React from 'react';
import './App.css';
import QuoteSearcher from "./Components/QuoteSearcher";

function App() {

  const sayHello = () => {
    console.log("hello");
    ;
  }

  return (
    <div className="App">
      
     <h1>hello rogier</h1>
     <button onClick={sayHello}>click</button>
     < QuoteSearcher />
    </div>
  );
}

export default App;
