import { Link } from 'react-router-dom'

const ToDoList = ({ items }) => {
  return (
    <div>
      <h2>To Do</h2>
      <ul>
        {items.map(item =>
          <li key={item.id}>
            <Link to={`/${item.id}`}>{item.content}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ToDoList