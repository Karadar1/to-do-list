import { useState } from "react";

interface Task {
  task: string;
  color: string;
  timeFrame: string;
}

const NewTask: React.FC<{ addTask: (task: Task) => void }> = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [color, setColor] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task && color && timeFrame) {
      addTask({ task, color, timeFrame });
      setTask("");
      setColor("");
      setTimeFrame("");
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add New Task</button>
      {isOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label>
              Task:
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Color:
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Time Frame:
              <input
                type="text"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit">Add Task</button>
            <button type="button" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewTask;
