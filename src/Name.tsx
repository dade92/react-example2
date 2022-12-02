import React from "react";

interface Props {
    name: string;
    surname: string;
    onClick: () => void;
}

const Name: React.FC<Props> = ({name, surname, onClick}) => {
    return (
        <div>
            <p data-testid="name" onClick={onClick}>{name} / {surname}</p>
        </div>
    )
}

export default Name;