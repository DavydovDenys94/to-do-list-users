import React, { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

import classes from "./UserForm.module.css";

function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    const addUser = {
      id: Math.random().toString(),
      name: name,
      age: age,
    };
    const hasNumber = (myString) => {
      return /\d/.test(myString);
    };
    if (name.trim().length < 1 || age.trim().length < 1) {
      setError({
        title: "An error occured!",
        content: "Enter valid name and age",
      });
      return;
    } else if (age < 1) {
      setError({
        title: "An error occured",
        content: "Impossible age, enter valid age",
      });
      return;
    } else if (hasNumber(name)) {
      setError({
        title: "An error occured",
        content: "Name should consist only of letters!",
      });
      return;
    }

    props.addUsers(addUser);
    setName("");
    setAge("");
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          clearButtonChangeHandler={errorHandler}
          title={error.title}
          content={error.content}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
          <label>Age</label>
          <input
            type="number"
            // min={1}
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default UserForm;
