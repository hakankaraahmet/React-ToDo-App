import React,{useState} from "react";

const CreateTask = ({addTask}) => {

    const[text,setText] = useState("")
    const[day,setDay] = useState("")

    const handleEntryChange = (e) =>{
        setText(e.target.value)
    }

    const handleDayChange = (e) =>{
        setDay(e.target.value)
    }

    const handleSubmit = (e) =>{
      if(!text || !day){
        e.preventDefault()
        alert("please fill blanks")
      }
      else{

        e.preventDefault()
        addTask({text,day,isDone : false})
        setText("")
        setDay("")
      }
    }


  return (
    <div className="mb-5" onSubmit={handleSubmit} >
      <form >
        <div class="form-group">
          <label for="inputtext" className="font-weight-bolder text-light">Please Enter Task</label>
          <input
          id="inputtext"
          onChange={handleEntryChange}
            type="text"
            className="form-control"
            value={text}
            placeholder="Enter task"
          />
          <label for="inputdate" className="font-weight-bolder text-light">Please Enter Date</label>
          <input
          id="inputdate"
          onChange={handleDayChange}
            type="date"
            value={day}
            className="form-control "
            placeholder="Enter day"
          />
        </div>
        <button type="submit" className="btn btn-outline-light btn-lg font-weight-bolder">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
