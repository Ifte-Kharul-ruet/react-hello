import React from 'react'

export default function GreetChild(props) {
  return (
    <div>
      <button onClick={()=>props.greedB()}>Click to Log In</button>
    </div>
  )
}
