import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import {ConditionalSubscriber} from './SubscriberComponent';
import {WebSocketConfigurationProvider} from './WebSocketConfigurationProvider';
import {Layout} from "./Layout";

const App: React.FC = () => {
    return process.env.REACT_APP_STAGE === 'local' ? (
        <RestClientConfiguration>
            <TranslationsConfiguration>
                <Layout>
                    <AppFlow/>
                </Layout>
            </TranslationsConfiguration>
        </RestClientConfiguration>

    ) : (
        <WebSocketConfigurationProvider>
            <ConditionalSubscriber/>
            <RestClientConfiguration>
                <TranslationsConfiguration>
                    <Layout>
                        <AppFlow/>
                    </Layout>
                </TranslationsConfiguration>
            </RestClientConfiguration>
        </WebSocketConfigurationProvider>
    );
}

export default App;
