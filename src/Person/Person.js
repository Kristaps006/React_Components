import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Aux";

//Stateless components are those who doesnt have class, it suggested to use it more

class Person extends React.Component {
  render() {
    // React fragment does the same as AUX
    return (
      <Aux>
        <div className={classes.person}>
          {this.props.children}

          <h2>Days of the week </h2>
          <button onClick={this.props.click}>Press me</button>
          <p>Today is of the week</p>
          <p onClick={this.props.click}>
            Tomorrow will be a week {this.props.test} {this.props.today}
          </p>
        </div>
      </Aux>
    );
  }
}

// PropTypes are usual to keep track on your prop types. Hepfull for big projects

Person.protoTypes = {
  click: PropTypes.func,
  test: PropTypes.string,
};

export default withClass(Person, classes.Person);
