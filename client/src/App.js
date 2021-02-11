import './App.css';
import { useState, useEffect } from 'react'
import { response } from 'express';

function url(path){
  return process.env.NODE_ENV === "development" 
  ? `http:localhost:1234${path}`
  : path 
}

function App() {
  const [ data, setData ]  = useState("Hi!")
  useEffect(() => {
    fetch(url("/api/"))
    .then(res => res.json())
    .then(apiData => setData(apiData.data))

  }, [])



  return (
    <div className="App">
      <header className="App-header">
        API Data: {data}
      </header>
    </div>
  );
}

export default App;