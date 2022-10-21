import React from 'react'
import { BsTrash } from "react-icons/bs";

export default function App() {
  const [listData, setListData] = React.useState(["first thing", "second thing", "next thing"])
  const [userInput, setUserInput] = React.useState("")

  function handleChange(e) {
    setUserInput(e.target.value)
  }

  console.log(userInput)

  function addListData() {
    setListData(prevListData => {
      return [...prevListData, userInput]
    })
    document.querySelector('.todo-input').value = ""
  }
  
  let renderedList = listData.map((item, index) => {
    return (
      <div className='list-item'
        key={index}
        id={index}
      >
        <div className='category-marker'></div>
        {item}
        <BsTrash className='trash-icon'/>
      </div>
    )
  })
  
  return (
    <section className='main-container'>
      <div className='header-container'>
        <input 
          className='todo-input'
          type="text"
          placeholder="Add To-do"
          onChange={handleChange}
        />
        <button 
          className='add-btn'
          onClick={addListData}
        >+</button>
      </div>
  
      {renderedList}
    </section>
  )
}