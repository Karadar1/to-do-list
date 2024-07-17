import React from "react";
import { ColoredContainer } from "./Task.styles";

interface TaskProps {
  title: string;
  color: string;
  timeframe: string;
}

const Task: React.FC<TaskProps> = ({ title, color, timeframe }) => {
  return (
    <ColoredContainer color={color}>
      <h3>{title}</h3>
      <p>Timeframe: {timeframe}</p>
    </ColoredContainer>
  );
};

export default Task;
