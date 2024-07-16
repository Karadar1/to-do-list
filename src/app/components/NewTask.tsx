import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

interface AddTask {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (toDo: string, color: string, timeframe: string) => void;
}

const NewTask: React.FC<AddTask> = ({ isOpen, onClose, onAddTask }) => {
  const [toDo, setToDo] = useState("");
  const [color, setColor] = useState("");
  const [timeframe, setTime] = useState("");

  const handleAddTask = () => {
    onAddTask(toDo, color, timeframe);
    setToDo("");
    setColor("");
    setTime("");
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Add New Task</h2>
        <TextField
          label="Title"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Timeframe"
          value={timeframe}
          onChange={(e) => setTime(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          sx={{ mt: 2 }}
        >
          Add Task
        </Button>
      </Box>
    </Modal>
  );
};
