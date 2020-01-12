import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrawingNumberList from './components/DrawingNumberList'
import WinningNumberList from './components/WinningNumberList'

function App() {
  return (
    <div className="App container my-4">
      <DrawingNumberList/>
      <hr/>
      <WinningNumberList/>
    </div>
  );
}

export default App;
