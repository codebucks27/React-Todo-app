import React, { useState } from "react";
import "./todoapp.css";

export default function TodoApp() {
  const [task, setTask] = useState("");

  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isComplete: false,
      };
      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    console.log(id);
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  const extra = (e, id) => {
    e.preventDefault();
    let elem = tasklist.findIndex((e) => e.id == id);
    let newtasklist = [...tasklist];
    newtasklist[elem] = {
      ...newtasklist[elem],
      isComplete: true,
    };
    setTaskList(newtasklist);
  };
  return (
    <div className="todo">
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Add task here..."
        onChange={(e) => handleChange(e)}
      />{" "}
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>{" "}
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.isComplete ? "crossText" : "listitem"} key={t.id}>
              {t.value}{" "}
              <button className="completed" onClick={(e) => extra(e, t.id)}>
                completed
              </button>
              <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}{" "}
      <br />
    </div>
  );
}
