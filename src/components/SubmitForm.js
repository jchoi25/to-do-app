import { useRecoilState } from "recoil";
import { useState, useRef } from 'react'
import { toDoListState } from './RecoilState'

// temporary method to get a random id
const getRandomId = (num) => {
  return Math.floor(Math.random() * num)
}

const SubmitForm = () => {
  const [toDoList, setToDoList] = useRecoilState(toDoListState)
  const [id, setId] = useState(getRandomId(100000))
  const [date, setDate] = useState(new Date())
  const inputRef = useRef()
  
  const addItem = (event) => {
    event.preventDefault()
    const itemObject = {
      content: inputRef.current.value,
      id: id,
      date: date
    }
    setToDoList(toDoList.concat(itemObject))
    setDate(new Date())
    setId(getRandomId(100000))
  }

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  return (
    <div>
      <p>To Do 추가</p>
      <form onSubmit={addItem}>
        <input
          type='text'
          ref={inputRef}
        />
        <input
          type='date'
          value={date}
          onChange={handleDateChange}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default SubmitForm