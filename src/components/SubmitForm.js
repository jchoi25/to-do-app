import { useRecoilState } from "recoil";
import { useState, useRef } from 'react'
import { toDoListState } from './RecoilState'

const SubmitForm = () => {
  const [toDoList, setToDoList] = useRecoilState(toDoListState)
  const [id, setId] = useState(0)
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
    setId(itemObject.id + 1)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  return (
    <div>
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