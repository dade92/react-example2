import React from 'react';
import {AppFlow} from './AppFlow';
import "./App.css";
import RestClientConfiguration from "./RestClientConfiguration";
import {TranslationsConfiguration} from './TranslationsConfiguration';
import {SubscriberComponent} from './SubscriberComponent';
import {WebSocketConfigurationProvider} from './WebSocketConfigurationProvider';
import {Layout} from "./Layout";
import {isLocalEnv} from "./Utils";

const App: React.FC = () =>
    isLocalEnv() ? (
        <RestClientConfiguration>
            <TranslationsConfiguration>
                <Layout>
                    <AppFlow/>
                </Layout>
            </TranslationsConfiguration>
        </RestClientConfiguration>

    ) : (
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
    )

export default App;
