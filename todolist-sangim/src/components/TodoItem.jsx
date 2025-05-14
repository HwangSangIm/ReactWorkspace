import './TodoItem.css'

function TodoItem({id,isDone,content,date,onDelete,onUpdate}) {

  
  const onClickDeleteButton = ()=> {
    onDelete(id);
  };

  const onChangecheckbox = ()=> {
    onUpdate(id);
  };

  return (
    <div className='TodoItem'>
        <input type="checkbox" onChange={onChangecheckbox} checked={isDone}/>
        <div className="content">{content}</div>
        <div className="date">{date}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

export default TodoItem
