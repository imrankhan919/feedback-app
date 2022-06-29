import React from 'react'
import PropTypes from 'prop-types'

function Header({text,bgColor,color}) {
  
    const Headerstyle = {
        backgroundColor: bgColor , 
        color : color
    }
  
    return (
   <header style={Headerstyle}>
    <div className="container">
        <h2>{text}</h2>
    </div>
   </header>
  )
}

Header.defaultProps = {
    text : "Feedback App (V 1.0)",
    bgColor : "rgba(0,0,0,0.4)",
    color : "#FF9F29"
}

Header.propTypes = {
    text : PropTypes.string.isRequired,
    bgColor : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
}


export default Header