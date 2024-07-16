import React, { useState } from "react";
import Task from "./Task";
export default function ListContainer() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [addTask, setaddTask] = useState(false);

  function createTask() {
    setaddTask(true);
  }

  return (
    <>
      {isEmpty ? <div>Empty container:</div> : <div> Components</div>}
      <button onClick={createTask}>Create Task</button>
    </>
  );
}
