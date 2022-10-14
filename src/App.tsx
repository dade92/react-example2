import React, { useState } from 'react';
import { UserConfiguration } from './CustomerConfiguration';
import { MyModal } from './MyModal';
import { ShowCustomerData } from './ShowCustomerData';
import { ShowCustomerDataList } from './ShowCustomerDataList';

const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="App">
       <UserConfiguration>
            <ShowCustomerData onSubmit={(name:string, checked: boolean)=>{
              console.log(name+checked)
              setOpenModal(true);
            }}/>
      </UserConfiguration>
      <ShowCustomerDataList/>
      {/* <ShowGithubUsers/> */}
      {
        openModal && <MyModal isOpen={openModal} onClose={()=>setOpenModal(false)} onConfirm={
          () => {
            console.log('customer confirmed!');
            setOpenModal(false);
          }
        }/>
      }
    </div>
  )
}

export default App;
