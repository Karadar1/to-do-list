"use client";

import React, { useState } from "react";
import ListContainer from "./components/ListContainer";
import NewTask from "./components/new-task/NewTask";

export default function HomePage() {
  const [addTask, setAddTask] = useState(false);

  const handleAddTask = () => {
    setAddTask(!addTask);
    console.log(addTask);
  };

  return (
    <div>
      {addTask ? <NewTask /> : null}
      <ListContainer />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
