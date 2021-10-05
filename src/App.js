 import logo from './logo.svg';
import './App.css';
import MyInfo from "./components/MyInfo"
import Login from "./components/login";
import React from "react";

function App() {
  return (
    <div className="App">
      <Login/>
      <MyInfo/>
    </div>
  );
}

export default App;
