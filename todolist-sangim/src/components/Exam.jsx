import { useReducer } from "react"

function Exam() {
    function reducer(state,action){
        switch (action.type) {
            case "INCREASE":
                return state + action.data;
            case "DECREASE":
                return state - action.data;
            default:
                return state;
        }
    }

    const [state,dispatch] = useReducer(reducer,0);

    const onClickPlus = () => {
        dispatch({
            type:"INCREASE" ,
            data:1
        }); // action 객체
    }

    const onClickMinus = () => {
        dispatch({
            type:"DECREASE",
            data:1
        }); // action 객체
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam