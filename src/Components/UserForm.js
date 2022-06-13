import React, { useState, useRef } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

import classes from "./UserForm.module.css";

function UserForm(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const addUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    if (enteredName.trim().length < 1 || enteredAge.trim().length < 1) {
      setError({
        title: "An error occured!",
        content: "Enter valid name and age",
      });
      return;
    } else if (enteredAge < 1) {
      setError({
        title: "An error occured",
        content: "Impossible age, enter valid age",
      });
      setName("");
      setAge("");
      return;
    } else if (
      enteredName.split("").forEach((element) => {
        !isNaN(element) &&
          setError({
            title: "An error occured",
            content: "Name should consist only of letters!",
          });
      })
    );

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
          <input
            type="text"
            // value={name}
            // onChange={nameChangeHandler}
            ref={nameInputRef}
          />
          <label>Age</label>
          <input
            type="number"
            // min={1}
            // value={age}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default UserForm;
