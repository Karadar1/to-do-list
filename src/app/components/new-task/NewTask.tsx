import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewTask() {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState("");
  const [color, setColor] = React.useState("");
  const [timeFrame, setTimeFrame] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h1>Add New Task</h1>
          </Typography>
          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Color"
            variant="outlined"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Timeframe"
            variant="outlined"
            value={timeFrame}
            onChange={(e) => {
              setTimeFrame(e.target.value);
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}
