import React from 'react'

function Person({person}) {
  return (
    <div>I am {person.name} my ID is {person.id}</div>
  )
}

export default Person
