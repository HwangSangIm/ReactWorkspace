function Button({text, bgColor="blue",children}){
    const btnClick=(e)=>{
      console.log(e);
      console.log({text},"Click!");
    }
    return(
      <>
        <button onClick={btnClick} style={{backgroundColor:bgColor}}>
        {text} {children}
        </button>
        
      </>

    );
}

export default Button;