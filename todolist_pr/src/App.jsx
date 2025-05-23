import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import UserEditForm from "./components/UserEditForm";
import './App.css';
import { useState, useEffect} from "react";

function App() {
  const [user, setUser] = useState([]);
  const [selectedUser,setSelectedUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
        })
        .catch((err) => {
            console.log("데이터 불러오기 실패!: ", err);
        });

    }, []);

    const addUser = (newUser) => {
      const newId = user.length ? Math.max(...user.map(u => u.id)) + 1 : 1;
      const userId = { id: newId, ...newUser };
      setUser([...user, userId]);
    };

    const deleteUser = (id) => {
      setUser(user.filter((u) => u.id !== id));
    };

    const updateUser = (updatedUser) => {
      setUser(user.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
      setSelectedUser(null);
    };
  
    const handleEdit = (userToEdit) => {
      setSelectedUser(userToEdit);
    };
  
    const handleCancelEdit = () => {
      setSelectedUser(null);
    };
  
    return (
      <div>
        {!selectedUser && <UserForm addr={addUser}/>}
        <UserEditForm selectedUser={selectedUser} onUpdate={updateUser} onCancel={handleCancelEdit}/>
        <UserList user={user} onDelete={deleteUser} onEdit={handleEdit}/>
      </div>
    )
}

export default App