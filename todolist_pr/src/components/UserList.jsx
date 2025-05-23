import { useState, useEffect } from "react";

function UserList({user,onDelete,onEdit}){

    return (
        <div>
          <h2>사용자 목록</h2>

          <ul>
            {user.map((user) => (
                <li key={user.id}>
                  <span className="list-info"> {user.name} ({user.email})</span>
                  <div className="button-group">
                    <button onClick={() => onDelete(user.id)}>삭제</button>
                    <button onClick={() => onEdit(user)}>수정</button>
                  </div>
                </li>
            ))}
          </ul>
        </div>
    )

}

export default UserList;