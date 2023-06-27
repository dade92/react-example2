import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import {ConditionalSubscriber, SubscriberComponent} from './SubscriberComponent';
import {WebSocketConfigurationProvider} from './WebSocketConfigurationProvider';
import {Layout} from "./Layout";

const App: React.FC = () => {
    return (
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
