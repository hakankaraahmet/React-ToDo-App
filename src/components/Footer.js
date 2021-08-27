import React from 'react'

 const Footer = ({link,text}) => {
    return (
        <div className="footer  text-light">
            designed by <a className="font-weight-bolder text-light" href={link} target="_blank">{text}</a>
        </div>
    )
}

export default Footer