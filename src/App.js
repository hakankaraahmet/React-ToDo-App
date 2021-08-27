import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { InitialState } from "./store/InitialState";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer"

const App = () => {
  const [tasks, setTask] = useState(InitialState);
  const [isShow, setIsShow] = useState(true);

  //ADD TASK
  const addTask = (task) => {
    const id = Date.now();
    const newTask = { ...task, id };
    setTask((prevState) => [...prevState, newTask]);
  };

  // REMOVE TASK

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => id !== task.id));
  };

  // TOGGLE TASK

  const toggleTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : { ...task }
      )
    );
  };

  // SHOW FORM

  const showTask = () => setIsShow(!isShow);

  return (
    <div className="container text-center mt-5">
      <Header showTask={showTask} isShow={isShow} />

      {isShow ? <CreateTask addTask={addTask} /> : ""}

      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ) : (
        <h1 className="text-light">There is no task to do :)</h1>
      )}
      <Footer link = {"https://github.com/hakankaraahmet"} text = {"Hakan Karaahmet"}/>
    </div>
  );
};

export default App;
