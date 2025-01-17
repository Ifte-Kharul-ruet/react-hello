import React from 'react'
import Person from './Person'

function NameList() {
    
    const persons = [
        {
            id :1, name:'Bruce'
        },
        {
            id :2, name:'Tom'
        },
        {
            id :3, name:'Jerry'
        },
    ]
    
    const personList = persons.map(person=><Person key={person.id} person = {person}/>)
  return (
    <div>
        {personList}
    </div>
  )
}

export default NameList
