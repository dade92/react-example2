import React, { useState } from 'react';
import { UserConfiguration } from './CustomerConfiguration';
import { MyModal } from './MyModal';
import { ShowCustomerData } from './ShowCustomerData';
import { ShowCustomerDataList } from './ShowCustomerDataList';

interface CreateCustomerRequest {
  name: string;
}

interface CreateCustomerResponse {
  code: string;
}

const createCustomer = async (name: string) => {
  const response = await fetch('http://localhost:8081/createCustomer', {
    method: 'POST',
    body: JSON.stringify({
      name: name
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const result = (await response.json()) as CreateCustomerResponse;

  console.log('result is: ', result.code);
};

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  let username = '';

  return (
    <div className="App">
       <UserConfiguration>
            <ShowCustomerData onSubmit={(name:string, checked: boolean)=>{
              console.log(name+checked);
              username = name;
              setOpenModal(true);
            }}/>
      </UserConfiguration>
      <ShowCustomerDataList/>
      {/* <ShowGithubUsers/> */}
      {
        openModal && <MyModal isOpen={openModal} onClose={()=>setOpenModal(false)} onConfirm={
          () => {
            createCustomer(username);
            setOpenModal(false);
          }
        }/>
      }
    </div>
  )
}

export default App;
