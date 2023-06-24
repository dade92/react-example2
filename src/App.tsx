import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import {SubscriberComponent} from './SubscriberComponent';
import {WebSocketConfigurationProvider} from './WebSocketConfigurationProvider';
import {Layout} from "./Layout";

const App: React.FC = () => {
    return (
            <WebSocketConfigurationProvider>
                <SubscriberComponent/>
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
