import React, { FC } from "react";

interface Props {
    name: string;
    surname: string;
}
  
export const Name: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.surname}
      </p>
    </div>
  )
}