import React from 'react'

const Button = ({text,showTask,isShow}) => {
    return (
        <div>
            <button type="button" className={`btn mb-3 ${isShow? "btn-outline-dark btn-lg" : "btn-outline-secondary"}`} onClick={showTask}>{text}</button>
        </div>
    )
}

export default Button