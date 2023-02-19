import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";

const App: React.FC = () => (
    <div className='AppFlow'>
        <RestClientConfiguration>
            <AppFlow/>
        </RestClientConfiguration>
    </div>
)

export default App;
