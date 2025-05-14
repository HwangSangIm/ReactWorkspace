import { useEffect } from "react";

function Even(){
    // Unmount
    useEffect(()=>{
        return ()=>{console.log("UnMount")} // 클린업
    },[]);
    return(
        <>
            <div> 짝수 </div>
        </>
    )
}

export default Even;