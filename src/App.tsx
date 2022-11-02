import React from 'react';
import styled from 'styled-components';
import {AppFlow} from './AppFlow';
import "./App.css";

const AppFlowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const App: React.FC = () => (
    <div className='AppFlow'>
        <AppFlow/>
    </div>
)

export default App;
