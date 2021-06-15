import React, { useState } from "react";
import "./styles.css";

export default function App() {
  interface Provider {
    name: string;
    status: string;
  }

  const [taskname, setTaskname] = useState<string>("");
  const [status, setStatus] = useState<string>("done");

  const [task, setTask] = useState<Provider[]>([]);

  const addTask = () => {
    setTask((task) => [...task, { name: taskname, status: "none" }]);
  };

  const deleteTask = (tasks: string) => {
    const result = task.filter((task) => task.name !== tasks);
    setTask(result);
  };
  const inputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskname(event.target.value);
  };
  return (
    <div className="App">
      <h1>To Do App</h1>
      <ol style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <input placeholder="Enter task" onChange={inputTask}></input>
          <button onClick={addTask}>Add task</button>
        </div>
      </ol>

      <ol>
        {task.map((item, index) => {
          return (
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10
              }}
            >
              <p>{item.name}</p>
              <button onClick={() => deleteTask(item.name)}>Delete Task</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

