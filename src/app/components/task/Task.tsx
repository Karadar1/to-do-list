import React from "react";
import { ColoredContainer } from "./Task.styles";

interface TaskProps {
  task: string;
  color: string;
  timeframe: string;
}

const Task: React.FC<TaskProps> = ({ task, color, timeframe }) => {
  return (
    <ColoredContainer color={color}>
      <h3>{task}</h3>
      <p>Timeframe: {timeframe}</p>
    </ColoredContainer>
  );
};

export default Task;
