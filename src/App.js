import "./App.css";
import Person from "./Person/Person.js";
import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";

//
//WORKING WITH CLASSES
//
//
// These are called components or class components. We have just couple of them in the app

class App extends React.Component {
  state = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  };

  daysToString = () => {
    const t = new Date().getDay();
    const daysOfWeek = this.state.days;
    return daysOfWeek[t];
  };

  deleteDay(index) {
    const day = [...this.state.days];
    //const day = this.state.days.slice(); it is the same as slice, we need to create new array to mutate it
    day.splice(index, 1);
    this.setState({ days: day });
  }

  render() {
    const style = {
      backgroundColor: "red",
      ":hover": {
        backgroundColor: "green",
      },
    };

    return (
      <StyleRoot>
        <div>
          <button style={style}>Press Me</button>

          {this.state.days.map((days, index) => {
            return <Person click={() => this.deleteDay(index)} test={days} />;
          })}

          <Person today={this.daysToString()} />
          <Person today={this.daysToString()}></Person>
        </div>
      </StyleRoot>
    );
  }
}

/* 
//FUNCTIONS hooks

const App = (props) => {
  const [days, setDays] = useState({
    weekdays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  });

  // we can use multiple states for each object
  const [months, setMonths] = useState({ month: ["January", "December"] });

  // days -we deconstruct and setDays we set new
  const changeDay = () => {
    setDays({
      weekdays: [
        "January",
        "Febrary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "",
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am learning React</h1>
      <p>This is very challenging!</p>
      <button onClick={changeDay}>Press Me</button>
      <Person day={days.weekdays[3]} tomorrow="Friday" week="10" />
      <Person day="Friday" tomorrow="Saturday" week="11">
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </Person>

      <Person day="Saturday" tomorrow="Sunday" week="11">
        This is a child of the Component
      </Person>
    </div>
  );
};
 */

export default Radium(App);
