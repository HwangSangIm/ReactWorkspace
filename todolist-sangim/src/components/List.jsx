import { useState , useContext} from 'react'
import './List.css'
import TodoItem from './TodoItem'
import { TodoContext } from '../App_todolist';
function List() {
  const {todos} = useContext(TodoContext);
  const [search,setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  const getFilteredData = () => {
    if (search === ""){
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
  );
  };

  return (
    <div className='List'>
        <h4>Todo List🌂</h4>
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
        <div className='todos_wrapper'>
            {getFilteredData().map((item)=>{
                return <TodoItem key={item.id} {...item}/>
            })}
        </div>

    </div>
  )
}

export default List
