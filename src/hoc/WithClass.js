import React from "react";

//one way of doing it
/* const withClass = props =>(

    <div className={props.classes}>
        {props.children}
    </div>
); */

const withClass = (WrappedComponent, className) => {
  return (props) => (
    // {..props} by deconstructing props we wil get the props we reference to
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
