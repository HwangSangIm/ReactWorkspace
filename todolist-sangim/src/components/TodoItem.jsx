import './TodoItem.css'

function TodoItem({content,date}) {

  return (
    <div className='TodoItem'>
        <input type="checkbox"/>
        <div className="content">{content}</div>
        <div className="date">{date}</div>
    </div>
  )
}

export default TodoItem
