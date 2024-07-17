import React from 'react'
import './myStyles.css'
function Stylesheet(props) {
    let cls = (props.primary)?'primary':''
  return (
    <h1 className={`${cls} font-xl`}>Stylesheets</h1>
  )
}

export default Stylesheet
