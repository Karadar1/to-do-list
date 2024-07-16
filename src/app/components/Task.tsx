import React from "react";

interface TaskProps {
  title: string;
  color: string;
  timeframe: string;
}

const Task: React.FC<TaskProps> = ({ title, color, timeframe }) => {
  return (
    <div
      style={{
        border: `2px solid ${color}`,
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>Timeframe: {timeframe}</p>
    </div>
  );
};

export default Task;
