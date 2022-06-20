import React from "react";

interface Props {
    name: string;
    surname: string;
}
  
export const Name: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
          Name: {props.name}  Surname: {props.surname}
      </p>
    </div>
  )
}
export const Name2 = (props: Props) => {
    return (
        <div>
            <p>
                {props.name} - {props.surname}
            </p>
        </div>
    )
}

export const Name3: React.FC<Props> = ({name, surname}) => {
  return (
      <div>
          <p>{name} / {surname}</p>
      </div>
  )
}