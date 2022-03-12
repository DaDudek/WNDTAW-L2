import React from 'react';
import './App.css';
import HelloWorld from "./HelloWorld";
import Logo from "./Logo";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Logo></Logo>
            <HelloWorld></HelloWorld>
        </header>
    </div>
  );
}

export default App;
