import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef} from "react";


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // Update
  useEffect(()=>{  
    if(!isMount.current){
      isMount.current=true;
      return;
    }
    console.log(`count:${count},input:${input}`)
  }, [count,input]); //deps

  // Mount
  useEffect(()=>{
    console.log("마운트")
  }, []);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      </section>
      <section>
        <Viewer count={count} />
        {count%2===0? <Even/>:null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
