import { useParams } from "react-router-dom"


function Diary(){
  const params = useParams();
  return(
    <div>
      {params.id}번 일기 Diary
    </div>
  )
}

export default Diary