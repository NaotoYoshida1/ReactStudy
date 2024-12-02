// import { useState } from 'react'
import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Axios from "axios";

function App() {
  console.log("最初");
  const [count, setCount] = useState(0)
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/test").then((response) => {
      console.log("疎通確認：useEffect");
      console.log("APIレスポンス:", response.data);
      setCategoryList(response.data);
    });
  }, []);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="App">Hello
        <ul>
          {categoryList.map((val, index) => {
            console.log("疎通確認");
            return <li key={index}>{val.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
