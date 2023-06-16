import React, { ReactNode } from "react";
import { StompSessionProvider } from "react-stomp-hooks";

export const WebSocketConfigurationProvider: React.FC<{children: ReactNode}> = ({children}) => (
    process.env.REACT_APP_STAGE !== 'local' ? (
        <StompSessionProvider url={"/ws-message"}>
            {children}    
        </StompSessionProvider>
    ) : <>{children}</>
)