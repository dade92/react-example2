import { render } from "@testing-library/react";
import { FC, ReactElement, ReactNode } from "react"
import RestClientConfiguration from "../RestClientConfiguration";
import { TranslationsConfiguration } from '../TranslationsConfiguration';

const customRender = (
    ui: ReactElement
) => {
    const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => (
        <RestClientConfiguration>
            <TranslationsConfiguration>
                {children}
            </TranslationsConfiguration>
        </RestClientConfiguration>
      );

    return render(ui, {
        wrapper: ContextWrapper
      });
}

export { customRender as render };