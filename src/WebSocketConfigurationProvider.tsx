import React, { ReactNode } from "react";
import { StompSessionProvider } from "react-stomp-hooks";

export const WebSocketConfigurationProvider: React.FC<{children: ReactNode}> = ({children}) => (
        <StompSessionProvider url={"/ws-message"}>
            {children}    
        </StompSessionProvider>
)