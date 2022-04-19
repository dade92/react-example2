import React from 'react';
import './App.css';
import { Name, Name2 } from './Name';

function App() {
  return (
    <div className="App">
      <Name name='Davide' surname='Botti'/>
      <Name2 name='Davide' surname='Botti'/>
    </div>
  );
}

export default App;
