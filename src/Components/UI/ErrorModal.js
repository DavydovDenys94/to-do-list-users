import React from "react";

import Button from "./Button";

import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  // const clearButtonChangeHandler = () => {};
  return (
    <div className={classes.backdrop} onClick={props.clearButtonChangeHandler}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <Button type="submit" onClick={props.clearButtonChangeHandler}>
            Clear
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
