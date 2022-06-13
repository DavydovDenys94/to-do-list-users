import React, { useState } from "react";

import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandle = (user) => {
    const arrUsers = [...users, user];
    setUsers(arrUsers);
    console.log(user);
    console.log(arrUsers);
  };
  return (
    <React.Fragment>
      <UserForm addUsers={addUserHandle} />
      <UserList usersList={users} />
    </React.Fragment>
  );
}

export default App;
