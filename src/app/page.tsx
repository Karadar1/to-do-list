"use client";

import React, { useState } from "react";
import ListContainer from "./components/ListContainer";
import NewTask from "./components/new-task/NewTask";

export default function HomePage() {
  return (
    <div>
      <ListContainer />
    </div>
  );
}
