import { use, useState ,} from "react"
import Viewer from "./Viewer"
import Timer from "../Timer"
function Question2(){
    const [state, setState] = useState({
        name:"",
        birth:"",
    })
    const [isTimer, setTimer] = useState(false);
    function handleOnChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div>
            <div>
                <input name="name" onChange={handleOnChange}/>
                <input name="birth" type="date" onChange={handleOnChange}/>
            </div>
            <Viewer {...state}/>
            <hr></hr>
            <button onClick={()=> {
                setTimer(!isTimer);
            }}>
                타이머 {isTimer ? "중지":"시작"}
            </button>
            {isTimer === true ? <Timer /> : null}
        </div>

    )
}

export default Question2