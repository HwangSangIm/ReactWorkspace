import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState,useRef } from 'react'

const mockData = [
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().toLocaleDateString()
  },
  {
    id:1,
    isDone: false,
    content: "빨래하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id:2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().toLocaleDateString(),
  }

]

function App_todolist() {
  const [todos,setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = (content)=>{
    const newTodo = {
      id: idRef.current++,
      isDone:false,
      content:content,
      date: new Date().toLocaleDateString(),
    }
    setTodos([...todos,newTodo]);
  };

  const onDelete = (targetId)=>{
    setTodos(todos.filter((item)=>item.id !== targetId));
  }

  const onUpdate = (targetId)=>{
    setTodos(
      todos.map((item) => item.id === targetId ? { ...item, isDone: !item.isDone} : item
    )
    );
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
  )
}

export default App_todolist
