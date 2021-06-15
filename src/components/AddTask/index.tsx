import React, { useState } from "react";

interface Props {
    addTask: (event: React.MouseEvent<HTMLButtonElement>) => void;
    inputTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
    status: string;
}

export default function Index({ addTask, inputTask, status }: Props) {
    // const addTask = () => {
    //   setTask((task) => [...task, { name: taskname, status: "none" }]);
    // };

    return (
        <div className="App">
            <input placeholder={status} onChange={inputTask}></input>
            <button onClick={addTask}>Add task</button>
        </div>
    );
}
