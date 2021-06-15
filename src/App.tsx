import React, { useState } from "react";
import "./styles.css";
import AddTask from "../src/components/AddTask";

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

  const deleteTask = (index: number) => {
    const newArray = [...task];
    newArray.splice(index, 1);
    setTask(newArray);
  };
  const inputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskname(event.target.value);
  };
  return (
    <div className="App">
      <h1>To Do App</h1>
      <ol style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          {/* <input placeholder="Enter task" onChange={inputTask}></input> */}
          <AddTask addTask={addTask} inputTask={inputTask} status={status} />
          {/* <button onClick={addTask}>Add task</button> */}
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
              <button onClick={() => deleteTask(index)}>Delete Task</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

