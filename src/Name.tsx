import React from "react";

interface Props {
    name: string;
    surname: string;
}
  
export const Name: React.FC<Props> = ({name, surname}) => {
  return (
    <div>
      <p>
          {name} {surname}
      </p>
    </div>
  )
}