import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import { ConditionalSubscriberComponent } from './SubscriberComponent';
import { WebSocketConfigurationProvider } from './WebSocketConfigurationProvider';

const App: React.FC = () => {
    return (
        <div className='AppFlow'>
            <WebSocketConfigurationProvider>
                <ConditionalSubscriberComponent />
                <RestClientConfiguration>
                    <TranslationsConfiguration>
                        <AppFlow/>
                    </TranslationsConfiguration>
                </RestClientConfiguration>
            </WebSocketConfigurationProvider>
        </div>
    );
}

export default App;
