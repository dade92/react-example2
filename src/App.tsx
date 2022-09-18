import React from 'react';
import './App.css';
import { UserConfiguration } from './CustomerConfiguration';
import { ShowCustomerData } from './ShowCustomerData';

const App = () => {
  return (
    <div className="App">
      <UserConfiguration>
        <ShowCustomerData/>
      </UserConfiguration>
    </div>
  );
}

export default App;
