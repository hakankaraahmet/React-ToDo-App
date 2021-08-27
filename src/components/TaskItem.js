import React from "react";

const TaskItem = ({ task,deleteTask,toggleTask }) => {
  return (
    <div>
      <div class={`card ${task.isDone ? "bg-success text-light" : ""}`} onDoubleClick={() => toggleTask(task.id)}>
        <div class="card-body row">
          <h4 class="card-text font-weight-bolder col-8 text-dark">
            {task.text}
          </h4>
          <h6 className="col-3 text-muted">
             { task.day}
          </h6>
          <button onClick={()=>deleteTask(task.id)} className="btn btn-danger col-1 ">
             <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
