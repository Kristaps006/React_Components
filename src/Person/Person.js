import React from "react";
import "./Person.css";
import Radium from "radium";
//Stateless components are those who doesnt have class, it suggested to use it more

const person = (props) => {
  return (
    <div className="person" style={props.customStyle}>
      {props.children}

      <h2>Days of the week </h2>
      <button onClick={props.click}>Press me</button>
      <p>Today is of the week</p>
      <p onClick={props.click}>
        Tomorrow will be a week {props.test} {props.today}
      </p>
    </div>
  );
};

export default Radium(person);
