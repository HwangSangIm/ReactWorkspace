import {useEffect, useState} from 'react'
import './Header.css'

function Header() {
    const [time,setTime] = useState(new Date().toLocaleString())
    useEffect(()=> {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        },1000);

        return () => {
            clearInterval(timer);
        };
    },[]);

  return (
    <div className='Header'>
        <h3>오늘은📆</h3>
        <h1> {time} </h1>
    </div>
  )
}

export default Header
