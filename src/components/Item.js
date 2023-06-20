import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div>
      <Link to={`/`}>main</Link>
      <h2>{item.content}</h2>
      <p>id: {item.id}</p>
      <p>date: {item.date}</p>
    </div>
  )
}

export default Item