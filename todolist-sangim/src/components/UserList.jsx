import { useState, useEffect } from "react";

function UserList(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
        })
        .catch((err) => {
            console.log("데이터 불러오기 실패!: ", err);
        });

    }, []);

    return (
        <div>
          <h2>사용자 목록</h2>

          <ul>
            {users.map((user) => (
                <li key={user.id}>
                  {user.name} ({user.email})
                </li>
            ))}
          </ul>
        </div>
    )

}

export default UserList;