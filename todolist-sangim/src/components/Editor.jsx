import { useState,useContext } from 'react';
import './Editor.css'
import { TodoContext } from '../App_todolist';
function Editor() {
    const {onCreate} = useContext(TodoContext);
    const [content, setContent] = useState("");
    
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const onKeyDown = (e)=>{
        if (e.keyCode === 13){
            onsubmit();
        }
    }

    const onsubmit = ()=>{
        onCreate(content);
    }

    return (
        <div className='Editor'>
            <input value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo" />
            <button onClick={onsubmit}>추가</button>
        </div>
    )
}

export default Editor
