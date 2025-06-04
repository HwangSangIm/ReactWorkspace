import { Routes,Route, Link , useNavigate} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import New from './pages/New';
function App(){
  const navi = useNavigate();
  const onClickBtn=()=>{
    navi("/diary");
  }

  return(
    <>
      <h4>감정일기 project</h4>
      <button onClick={onClickBtn}>다이어리 보기</button>
      <div>
        <Link to={"/"}>Home </Link>
        <Link to={"/new"}>새 일기 </Link>
        <Link to={"/diary"}>일기 보기</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App