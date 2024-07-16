import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick = {()=> props.greetHandler('child')}  >Greed Parent</button>
    </div>
  )
}

export default ChildComponent

