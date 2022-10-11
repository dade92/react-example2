import React from 'react';
import { UserConfiguration } from './CustomerConfiguration';
import { ShowCustomerData } from './ShowCustomerData';
import { ShowCustomerDataList } from './ShowCustomerDataList';

const App = () => {
  return (
    <div className="App">
       <UserConfiguration>
            <ShowCustomerData onSubmit={(name:string, checked: boolean)=>console.log(name+checked)}/>
      </UserConfiguration>
      <ShowCustomerDataList/>
      {/* <ShowGithubUsers/> */}
    </div>
  )
}

export default App;
