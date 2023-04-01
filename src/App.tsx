import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import { TranslationsConfiguration } from './TranslationsConfiguration';

const App: React.FC = () => (
    <div className='AppFlow'>
        <TranslationsConfiguration>
            <RestClientConfiguration>
                <AppFlow/>
            </RestClientConfiguration>
        </TranslationsConfiguration>
    </div>
)

export default App;
