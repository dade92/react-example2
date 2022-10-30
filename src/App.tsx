import React from 'react';
import styled from 'styled-components';
import { AppFlow } from './AppFlow';

const AppFlowContainer = styled.div`
  margin: auto;
  width: 50%;
`

const App: React.FC = () => (
  <AppFlowContainer>
    <AppFlow/>
  </AppFlowContainer>
)

export default App;
