import {render} from "@testing-library/react";
import {FC, ReactElement, ReactNode} from "react"
import {TranslationsConfiguration} from '../TranslationsConfiguration';

const customRender = (
    ui: ReactElement
) => {
    const ContextWrapper: FC<{ children: ReactNode }> = ({children}) => (
        <TranslationsConfiguration>
            {children}
        </TranslationsConfiguration>
    );

    return render(ui, {
        wrapper: ContextWrapper
    });
}

export {customRender as render};