import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import { TranslationsConfiguration } from './TranslationsConfiguration';

const App: React.FC = () => (
    <div className='AppFlow'>
        <RestClientConfiguration>
            <TranslationsConfiguration>
                    <AppFlow/>
            </TranslationsConfiguration>
        </RestClientConfiguration>
    </div>
)

export default App;
