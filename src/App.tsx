import React,{FC ,useState} from 'react'
import { ChangeEvent } from 'react';
import TodoTask from './TodoTask';
import { Itask } from './Interface';


const App:FC  = () => {
  const [task, settask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, settodoList] = useState<Itask[]>([]);
  const changeValue = (event : ChangeEvent<HTMLInputElement>): void =>{
    if(event.target.name === "task"){
    settask(event.target.value)
    }else if(event.target.value === "deadline"){
    setDeadline(Number(event.target.value))
    }
  }
  const addTask = ():void =>{
    const newTask = {taskName : task, tdeadline : deadline};
    settodoList([...todoList,newTask])
    console.log(newTask)
    settask("");
    setDeadline(0);
  }
  const completeTask = (removeTask: string):void => {
    settodoList(todoList.filter((task) => {
       return task.taskName != removeTask;
    }))
  }
  return (
    <>
    <div className='container total'>
      <div className='row d-flex text-center justify-content-center mt-4'>
          <div className="col-md-8">
            <div className="rounded-3 custom-box">
            <h3 className="text-secondary mb-4">Task Manager</h3>
              <form className="form-group d-flex justify-content-between"> 
                <input className="form-control m-2" value={task} name="task" placeholder="Type the task ..." onChange={changeValue}/>
                {/* <input type="number" className="form-control m-2" defaultValue={deadline}   name="deadline" placeholder="Type the deadline ..."/> */}
              </form>
              <button onClick={addTask} className="btn btn-primary mt-4">Submit</button>
            </div>
          </div>
      </div>
    </div>
    <div className="container">
      {todoList.map((task:Itask ,key:number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
      })}
    </div>
    </>

  )
}

export default App
