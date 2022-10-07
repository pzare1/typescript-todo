import React from 'react'
import { Itask } from './Interface'
interface Props{
  task?: Itask;
  completeTask(removeTask: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <>
        <div className="container">
          <div className="row mt-4 d-flex justify-content-center">
                <div className="col-md-8 mx-auto text-center">
                  <div className="text-white bg-primary p-2">
                  {task?.taskName}  
                  </div>
                <div className="bg-danger text-white text-center">
                <button className="btn btn-danger w-100 p-0" onClick={() =>console.log("salam")}><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default TodoTask
