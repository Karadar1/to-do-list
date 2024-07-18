import React, { useEffect, useState } from "react";
import Task from "./task/Task";
import NewTask from "./new-task/NewTask";

interface Task {
  task: string;
  color: string;
  timeFrame: string;
}

const initialTasks: Task[] = [
  {
    task: "Complete project report",
    color: "blue",
    timeFrame: "2 hours",
  },
  {
    task: "Team meeting",
    color: "green",
    timeFrame: "1 hour",
  },
  {
    task: "Code review",
    color: "yellow",
    timeFrame: "3 hours",
  },
  {
    task: "Lunch break",
    color: "red",
    timeFrame: "30 minutes",
  },
  {
    task: "Client presentation",
    color: "purple",
    timeFrame: "1.5 hours",
  },
];

export default function ListContainer() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const displayTasks = () => {
    return tasks.map((t, index) => (
      <Task key={index} task={t.task} color={t.color} timeframe={t.timeFrame} />
    ));
  };

  const addTask = ({ task, color, timeFrame }: Task) => {
    const newTask: Task = { task, color, timeFrame };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    displayTasks();
  }, [tasks]);

  return (
    <>
      <NewTask addTask={addTask} />
      {displayTasks()}
    </>
  );
}
