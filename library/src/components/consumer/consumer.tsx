import React, { FC } from "react";
import { useContextContext } from "../context";

interface ConsumerProps {}

export const Consumer: FC<ConsumerProps> = (props) => {
  const func = useContextContext();

  return (
    <div>
      <button onClick={func}>click</button>
    </div>
  );
};
