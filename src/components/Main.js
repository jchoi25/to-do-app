import {
  Routes, Route, useMatch
} from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import ToDoList from './ToDoList'
import Item from './Item'
import { toDoListState } from './RecoilState'

const Main = () => {
  const toDoList = useRecoilValue(toDoListState)
  const match = useMatch('/:id')

  const item = match
  ? toDoList.find(item => item.id === Number(match.params.id))
  : null

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<ToDoList items={toDoList}/>} />
        <Route path='/:id' element={<Item item={item}/>} />
      </Routes>
    </div>
  );
}

export default Main;