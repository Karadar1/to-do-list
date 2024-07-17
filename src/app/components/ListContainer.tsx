import React from "react";
import Task from "./task/Task";
import NewTask from "./new-task/NewTask";

export default function ListContainer() {
  return (
    <>
      <div>ListContainer</div>;
      <Task title="eat" color="red" timeframe="10 minutes" />
      <NewTask />
    </>
  );
}
