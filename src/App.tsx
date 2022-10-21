import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { createCustomer } from './CreateCustomer';
import { UserConfiguration } from './CustomerConfiguration';
import { MyModal } from './MyModal';
import { ShowCustomerData } from './ShowCustomerData';
import { ShowCustomerDataList } from './ShowCustomerDataList';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
            createCustomer(username, () => {
              setLoading(false);
            });
            setOpenModal(false);
            setLoading(true);
          }
        }/>
      }
      {
        loading && <CircularProgress />
      }
    </div>
  )
}

export default App;
