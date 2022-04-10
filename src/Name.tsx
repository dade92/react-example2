import React, { FC } from "react";

interface Props {
    name: string;
}
  
export const Name: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
        {props.name}
      </p>
    </div>
  )
}