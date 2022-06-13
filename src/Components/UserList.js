import React from "react";

import UserItems from "./UserItem";

import Card from "./UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  if (props.usersList.length === 0) {
    return <h2 className={classes.static}>Found no users</h2>;
  }
  return (
    <Card className={classes.input}>
      <ul>
        {props.usersList.map((user) => (
          <UserItems
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
          />
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
