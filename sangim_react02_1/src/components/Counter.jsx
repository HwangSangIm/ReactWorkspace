
function Counter(){
    const [count,setCount] = useState(0);
    console.log("Num 컴포넌트 리렌더링");
    return(
      <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>증가</button>
        <button onClick={()=>{setCount(count-1)}}>감소</button>
      </>
    )
  }

  export default Counter