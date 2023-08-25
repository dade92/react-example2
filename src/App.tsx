import React from 'react';
import {AppFlow} from './AppFlow';
import {TranslationsConfiguration} from './TranslationsConfiguration';
import {SubscriberComponent} from './SubscriberComponent';
import {WebSocketConfigurationProvider} from './WebSocketConfigurationProvider';
import {Layout} from "./Layout";
import {isLocalEnv} from "./utils/Utils";

const App: React.FC = () =>
    isLocalEnv() ? (
        <TranslationsConfiguration>
            <Layout>
                <AppFlow/>
            </Layout>
        </TranslationsConfiguration>

    ) : (
        <WebSocketConfigurationProvider>
            <SubscriberComponent/>
            <TranslationsConfiguration>
                <Layout>
                    <AppFlow/>
                </Layout>
            </TranslationsConfiguration>
        </WebSocketConfigurationProvider>
    )

export default App;
