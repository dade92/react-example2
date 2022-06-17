import React from 'react';
import './App.css';
import { Name, Name2, Name3 } from './Name';
import styled from "styled-components";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
        <Title>Title</Title>
      <Name name='Davide' surname='Botti'/>
      <Name2 name='Davide' surname='Botti'/>
      <Name3 name='Davide' surname='Botti'/>
    </div>
  );
}

export default App;
