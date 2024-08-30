import React from 'react'
import Todocard from './Todocard'

export default function Todolist() {
    let todos = [
        'Play MH:Now',
        'Eat Potate'
    ]

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
               <Todocard key={todoIndex}>

               </Todocard>
            )
        })}
    </ul>
  )
}
