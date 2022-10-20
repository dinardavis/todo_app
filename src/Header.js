import React from 'react'

export default function Header() {
  const [userInput, setUserInput] = React.useState("")
  const [todoArray, setTodoArray] = React.useState(["first to-do", "next thing", "one mo' thing"])

  const listToRender = todoArray.map(item => {
    return <li className="list-item">{item}</li>
  })

  function handleChange(e) {
    const {value} = e.target
    setUserInput(value)
  }

  function addTodoItem(item) {
    setTodoArray(prevTodoArray => {
      return [...prevTodoArray, item]
    })
  }

  return (
    <>
      <div className="item-display">
        <input
          type="text"
          placeholder="Enter To-Do"
          name="todoInput"
          value={userInput}
          onChange={handleChange}
        />
      </div>
      <button 
        className="add-todo-btn"
        onClick={() => {addTodoItem(userInput)}}
      >+</button>
      <ul className="list-container">
        {listToRender}
      </ul>
    </>
   
  )
}