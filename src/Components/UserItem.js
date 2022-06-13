import React from "react";

import classes from "./UserItem.module.css"

const UserItem = (props) => {
  return (
    <li className={classes.li}>{`${props.name} (${props.age} years old)`}</li>
  );
};
export default UserItem;
