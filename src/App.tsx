import React from 'react';
import styled from 'styled-components';
import { AppFlow } from './AppFlow';

const AppFlowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const App: React.FC = () => (
  <AppFlowContainer>
    <AppFlow/>
  </AppFlowContainer>
)

export default App;
