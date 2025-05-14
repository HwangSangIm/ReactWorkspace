function Register(){
    return(
      <>
        <h1> 회원 가입</h1>
        <div>
            이름 : <input placeholder="이름입력"/>
        </div>
        <div>
            생일 : <input type="date"/>
        </div>
        <div>
            국가 :
            <select>
                <option>한국</option>
                <option>미국</option>
                <option>영국</option>    
            </select>
        </div>
      </>  
    );
}

export default Register