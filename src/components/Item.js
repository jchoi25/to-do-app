import { Link, useNavigate } from 'react-router-dom'
import { toDoListState } from './RecoilState'
import { useRecoilState } from 'recoil'
import { useState } from 'react'

const Item = ({ item }) => {
  const [toDoList, setToDoList] = useRecoilState(toDoListState)
  const navigate = useNavigate()
  
  const index = toDoList.findIndex(listItem => listItem === item)
  const itemAtIndex = toDoList[index]
  const itemContent = itemAtIndex.content
  const itemId = itemAtIndex.id
  const itemDate = itemAtIndex.date
  
  const [isClicked, setIsClicked] = useState(false)
  const [content, setContent] = useState(itemContent)
  const [id, setId] = useState(itemId)
  const [date, setDate] = useState(itemDate)

  const deleteItem = () => {
    setToDoList([...toDoList.slice(0, index), ...toDoList.slice(index + 1)])
  }

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const editItems = () => {
    setIsClicked(!isClicked)
    const itemObject = {
      content: content,
      id: id,
      date: date
    }
    setToDoList([...toDoList.slice(0, index), itemObject, ...toDoList.slice(index + 1)])
    navigate(`/${id}`)
    console.log(toDoList)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }
  const handleIdChange = (event) => {
    setId(Number(event.target.value))
  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  return (
    <div>
      <Link to={'/'}>메인 페이지</Link>
      <Link to={'/'}>
        <button onClick={deleteItem}>삭제</button>
      </Link>
      {isClicked ? (
        <div>
          <h2>{content}</h2>
          <p>아이디: {id}</p>
          <p>날짜: {date}</p>
          <button onClick={handleClick}>수정</button>
        </div> 
      ) : (
        <div>
          <p>to do:</p>
          <input type='text' defaultValue={content} onChange={handleContentChange}/>
          <p>아이디:</p>
          <input defaultValue={id} onChange={handleIdChange}/>
          <p>날짜:</p>
          <input type='text' defaultValue={date} onChange={handleDateChange}/>
          <br/> {/*placeholder before adding css*/}
          <button onClick={editItems}>저장</button>
        </div>
      )
    }
      
    </div>
  )
}

export default Item