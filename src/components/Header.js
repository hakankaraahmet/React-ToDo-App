import React from 'react'
import Button from './Button'

const  Header =({showTask,isShow}) => {
    return (
        <div className="mb-5">
           <h1 className="text-light">\Todo App/</h1> 
           <Button text={isShow ? "Hide Task Form" : "Show Tasks Form"} isShow={isShow} showTask={showTask}/>

        </div>
    )
}


export default Header