import React from "react";

interface Props {
    name: string;
    surname: string;
}
  
export const Name: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <p>
          Name: {props.name}  Surname: {props.surname}
      </p>
    </div>
  )
}