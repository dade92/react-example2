import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import {ConditionalSubscriberComponent} from './SubscriberComponent';
import {WebSocketConfigurationProvider} from './WebSocketConfigurationProvider';
import {Layout} from "./Layout";

const App: React.FC = () => {
    return (
        <div className='AppFlow'>
            <WebSocketConfigurationProvider>
                <ConditionalSubscriberComponent/>
                <RestClientConfiguration>
                    <TranslationsConfiguration>
                        <Layout>
                            <AppFlow/>
                        </Layout>
                    </TranslationsConfiguration>
                </RestClientConfiguration>
            </WebSocketConfigurationProvider>
        </div>
    );
}

export default App;
