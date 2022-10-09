import React, { useEffect } from 'react';
import { UserConfiguration } from './CustomerConfiguration';
import { ShowCustomerData } from './ShowCustomerData';
import { ShowCustomerDataList } from './ShowCustomerDataList';
import { ShowGithubUsers } from "/Users/davide/Documents/programming/react-example2/src/ShowGithubUsers";

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
