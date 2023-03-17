import React, { useState } from 'react'
import TodoList from './TodoList';
import "./styles.css"

function App() {

  const [item, setItem] = React.useState("");
  const [itemList, setItemList] = React.useState([]);
  
  function addItem(event) {
    setItem(event.target.value)
  }

  function addList() {
    setItemList((prevItem) => {
      return [...prevItem, item];
    })
    setItem("");
  }

  function deleteItems(id) {
    console.log("deleted")

    setItemList((prevItem) => {
      return prevItem.filter((arrElem, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
    <div className='main_div'>
      <div className='centre_div'>
        <br/>
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add an Items' value={item} onChange={addItem} />
        <button onClick={addList}> + </button>

        <ol>

          {itemList.map((item, index) => {
            return <TodoList text={item} onSelect={deleteItems} key={index} id={index} />
          })}

        </ol>
      </div>
    </div>
    </>
  )
}

export default App
