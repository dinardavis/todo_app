import React from 'react'
import Form from './components/Form';
import List from './components/List'


export default function App() {
  const [todoList, setTodoList] = React.useState([])
  const [userInput, setUserInput] = React.useState("")

  return (
    <section className='main-container'>
 
      <Form 
        todoList={todoList}
        setTodoList={setTodoList}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <List 
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </section>
  )
}