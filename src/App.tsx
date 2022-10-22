import { Alert, AlertTitle, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { createCustomer } from './CreateCustomer';
import { UserConfiguration } from './CustomerConfiguration';
import { MyModal } from './MyModal';
import { ShowCustomerData } from './ShowCustomerData';
import { ShowCustomerDataList } from './ShowCustomerDataList';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  let username = '';

  const onCreateCustomerSuccess = () => {
    setErrorAlert(false);
    setLoading(false);
  };

  const onCreateCustomerFailure = () => {
    setErrorAlert(true);
    setLoading(false);
  };

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
      {
        openModal && <MyModal isOpen={openModal} onClose={()=>setOpenModal(false)} onConfirm={
          () => {
            createCustomer(username, onCreateCustomerSuccess, onCreateCustomerFailure);

            setOpenModal(false);
            setLoading(true);
          }
        }/>
      }
      { loading && <CircularProgress /> }
      {
        errorAlert && <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong. Try again
        </Alert>
      }
    </div>
  )
}

export default App;
