import { Link } from 'react-router-dom'
import { useState } from 'react'

const ToDoList = ({ items }) => {
  const [showAll, setShowAll] = useState(true)
  const [firstDate, setFirstDate] = useState(new Date())
  const [secondDate, setSecondDate] = useState(new Date())
  
  const handleFirstDateChange = (event) => {
    setFirstDate(event.target.value);
  }

  const handleSecondDateChange = (event) => {
    setSecondDate(event.target.value);
  }

  const itemsToShow = showAll ? items : items.filter(
    item => item.date > firstDate && item.date < secondDate
  )

  return (
    <div>
      <h2>To Do</h2>
      <ul>
        {itemsToShow.map(item =>
          <li key={item.id}>
            <Link to={`/${item.id}`}>{item.content}</Link>
          </li>
        )}
      </ul>
      <p>날짜 선택</p>
      <input
        type='date'
        value={firstDate}
        onChange={handleFirstDateChange}
      />
      <input
        type='date'
        value={secondDate}
        onChange={handleSecondDateChange}
      />
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? '선택' : '해제'}
      </button>
    </div>
  )
}

export default ToDoList