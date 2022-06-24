import React from 'react';
import './App.css';
import { Name, Name2, Name3 } from './Name';
import styled from "styled-components";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  return (
    <div className="App">
        <Title>Title</Title>
      <Name name='Davide' surname='Botti' onClick={() => {console.log('clicked!')}}/>
      <Name2 name='Davide' surname='Botti' onClick={() => {console.log('clicked!')}}/>
      <Name3 name='Davide' surname='Botti' onClick={() => {console.log('clicked!')}}/>
    </div>
  );
}

export default App;
