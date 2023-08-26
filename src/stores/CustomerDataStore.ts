import {useState} from "react";

interface CustomerDataStore {
    states: {
        text: string,
        checked: boolean,
        validInput: boolean,
        success: boolean
    },
    effects: {
        onTextFieldChange: (text: string) => void;
        onCheckboxSelected: (value: boolean) => void;
        setSuccess: (value: boolean) => void;
        onConfirm: () => void;
    }
}

export const useCustomerDataStore = (username: string, consent: boolean, onSubmit: (text: string, checked: boolean) => void): CustomerDataStore => {
    const [text, setText] = useState<string>(username);
    const [checked, setChecked] = useState(consent);
    const [validInput, setValidInput] = useState(true);
    const [success, setSuccess] = useState(false);

    const onCheckboxSelected = (value: boolean) => {
        setChecked(value);
    }

    const onTextFieldChange = (text: string) => {
        setText(text);
    }

    const onConfirm = () => {
        setValidInput(true);
        if (text.length >= 0 && text.length < 3) {
            setValidInput(false);
        } else {
            setSuccess(true);
            onSubmit(text, checked);
        }
    }

    return {
        states: {
            text,
            checked,
            validInput,
            success
        },
        effects: {
            onTextFieldChange,
            onCheckboxSelected,
            setSuccess,
            onConfirm
        }
    }

}